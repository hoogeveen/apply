import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';
import App from '../shared';
import passport from 'passport'
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet
const app = express();

app.use('/dist', express.static('./dist'));


var BnetStrategy = require('passport-bnet').Strategy;
var BNET_ID = 'pys86q9u6vcjxan2yzjdud8h9cckq6y2'
var BNET_SECRET = '4UCemDtCt6e52UvSTktJjDyM3TEfgNMJ'

// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: "https://localhost:3000/auth/bnet/callback",
    region: "us"
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