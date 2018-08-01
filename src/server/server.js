import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';
import App from '../shared';
import passport from 'passport'
import session from 'express-session'
import https from 'https'
import fs from 'fs'
import fetch from 'node-fetch';

import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet
const app = express();

app.use('/dist', express.static('./dist'));

app.use(session({
  secret: 'keyboard cat',
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

var BnetStrategy = require('passport-bnet').Strategy;

var BNET_ID = process.env.BNET_ID
var BNET_SECRET = process.env.BNET_SECRET
var BNET_CALLBACK = process.env.BNET_CALLBACK

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: BNET_CALLBACK,
    region: "eu",
    scope: "wow.profile",
}, function(accessToken, refreshToken, profile, done) {
    fetch(`https://eu.api.battle.net/wow/user/characters?access_token=${profile.token}`,{
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json()).then(characters => {
      console.log(characters)
      return done(null, characters);
    }).catch(err => {
      console.log(err)
    })

}));

app.get('/auth/bnet',
    passport.authenticate('bnet'));

app.get('/auth/bnet/callback',
  passport.authenticate('bnet', { failureRedirect: '/' }),
  function(req, res){
    res.redirect('/');
  }
);


app.get('*', async (req, res) => {
    if (!req.user) {
      return res.redirect('/auth/bnet')
    }
		const sheet = new ServerStyleSheet();

		const html = ReactDOM.renderToString(sheet.collectStyles(<App />))
		const styles = sheet.getStyleTags();
		//render helmet data aka meta data in <head></head>
		const helmetData = helmet.renderStatic();
    //check context for url, if url exists then react router has ran into a redirect
    const initialData = {
      account: {
        battletag: 'merijn#21686',
        email: 'mail@merijn.pt'
      },
      characters: req.user.characters.filter(char => char.level === 110),
      apply: {
        maxStep: 0,
        step: 0,
        answers: {
            role: null,
            character: null
        }
      }
    }
		res.send(renderFullPage(html, initialData, helmetData, styles))
});

// const port = process.env.PORT || 9000;
// app.listen(port, function () {
// 	console.log('app running on localhost:' + port);
// });

var sslOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(sslOptions, app).listen(8443)

function renderFullPage(html, preloadedState, helmet, styles) {
	return `
    <!doctype html>
    <html>
      <head>
        <link rel="icon" href="/dist/favicon.ico" type="image/ico" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
				${helmet.link.toString()}
				${styles}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/assets/app.bundle.js"></script>
      </body>
    </html>
    `
}
