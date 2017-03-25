var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function() {
    facebookID = process.env.FACEBOOK_ID || 'id';
    facebookSecret = process.env.FACEBOOK_SECRET || 'secret';

    passport.use(new FacebookStrategy({
        clientID: facebookID,
        clientSecret: facebookSecret,
        callbackURL:'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done){
        var user = {};
        user.email = profile.emails[0].value;
        user.displayName = profile.displayName;

        user.facebook = {};
        user.facebook.id = profile.id;
        user.facebook.token = accessToken;

        user.email = profile.emails[0].value;
        done(null, user);
    }));
}