var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function() {
    googleID = process.env.GOOGLE_ID;
    googleSecret = process.env.GOOGLE_SECRET;
    passport.use(new GoogleStrategy({
        clientID: googleID,
        clientSecret: googleSecret,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    function(req, accessToken, refreshToken, profile, done) {
        var user = {};

        user.email = profile.emails[0].value;
        done(null, profile);
    }
    ));
}