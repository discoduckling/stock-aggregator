const passport = require('passport');
const keys = require('../config/keys');

module.exports = app => {
    app.get('/auth/login', passport.authenticate('auth0', {
        clientID: keys.CLIENT_ID_AUTH0,
        domain: keys.AUTH0_DOMAIN,
        redirectUri: keys.CALLBACK_URL,
        audience: 'https://' + keys.AUTH0_DOMAIN + '/userinfo',
        responseType: 'code',
        scope: 'openid profile'
    }));

    app.get(
        keys.CALLBACK_URL,
        passport.authenticate('auth0', {
            failureRedirect: '/'
        }), (req, res) => {
            res.redirect('/dashboard');
        }
    );

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

}