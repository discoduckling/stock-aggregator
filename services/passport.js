const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Auth0Strategy = require('passport-auth0');
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

const auth0Strategy = new Auth0Strategy({
    domain: keys.AUTH0_DOMAIN,
    clientID: keys.CLIENT_ID_AUTH0,
    clientSecret: keys.CLIENT_SECRET_AUTH0,
    callbackURL: keys.CALLBACK_URL
}, (accessToken, refreshToken, extraParams, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then(user => {
            if (user) {
                done(null, user);
            } else {
                new User({ googleId: profile.id }).save()
                    .then(user => done(null, user));
            }
        })
});

passport.use(auth0Strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user))
});

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     User.findById(id)
//         .then(user => done(null, user))
// });

// passport.use(
//     new GoogleStrategy({
//         clientID: keys.googleClientID,
//         clientSecret: keys.googleClientSecret,
//         callbackURL: '/auth/google/callback',
//         proxy: true
//     }, (accessToken, refreshToken, profile, done) => {
//         User.findOne({ googleId: profile.id })
//             .then(existingUser => {
//                 if (existingUser) {
//                     done(null, existingUser);
//                 } else {
//                     new User({ googleId: profile.id })
//                         .save()
//                         .then(user => done(null, user))
//                 }
//             })
//     })
// );