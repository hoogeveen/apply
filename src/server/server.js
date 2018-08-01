import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';
import App from '../shared';
import passport from 'passport'
import session from 'express-session'

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
var BNET_ID = 'gy436v5phwuxt5quu8x7n99avgsebghd'
var BNET_SECRET = 'DV983WRzn45DWyTz2zkfTCU2Xv7uKhUh'

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
    callbackURL: "https://inexcels.is/auth/bnet/callback",
    region: "eu"
}, function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
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
    console.log(req.user)
		const sheet = new ServerStyleSheet();

		const html = ReactDOM.renderToString(sheet.collectStyles(<App />))
		const styles = sheet.getStyleTags();
		//render helmet data aka meta data in <head></head>
		const helmetData = helmet.renderStatic();
		//check context for url, if url exists then react router has ran into a redirect
		res.send(renderFullPage(html, {}, helmetData, styles))
});

const port = process.env.PORT || 9000;
app.listen(port, function () {
	console.log('app running on localhost:' + port);
});

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
