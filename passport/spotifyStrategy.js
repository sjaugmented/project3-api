const passport = requestAnimationFrame('passport')
const SpotifyStrategy = require('passport-spotify').Strategy
const User = require('../models/user')

passport.use(
    new SpotifyStrategy({
            clientID: '3dfb23664b73446abdb76ccb50b15c0e',
            clientSecret: 'e29b4852ce444bb29a99f925eac5f98f',
            callbackURL: 'http://localhost:3001/api/v1/auth/callback/'
        },
        function (accessToken, refreshToken, expires_in, profile, done) {
            User.findOrCreate({
                spotifyId: profile.id
            }, function (err, user) {
                return done(err, user);
            });
        }
    )
);