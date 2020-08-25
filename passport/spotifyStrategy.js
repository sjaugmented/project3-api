const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy
const User = require('../models/user')

passport.use(
    new SpotifyStrategy({
            clientID: process.env.SPOT_CLIENT_ID,
            clientSecret: process.env.SPOT_CLIENT_SECRET,
            callbackURL: process.env.SPOT_CALLBACK
        },
        function (accessToken, refreshToken, expires_in, profile, done) {
            User.findOne({
                spotifyId: profile.id
            }, function (err, user) {
                    if (user) {
                        user.name = profile.displayName
                        user.token = refreshToken
                        user.loggedIn = true
                        user.save(function (err) {
                            return done(null, user)
                        })
                    } else {
                        // new user!
                        const newUser = new User({
                            spotifyId: profile.id,
                            name: profile.displayName,
                            token: refreshToken,
                            loggedIn: true
                        })
                        newUser.save(function (err) {
                            if (err) return done(err)
                            return done(null, newUser)
                        })
                    }                    
            });
        }
    )
);

// called everytime a user logs in
passport.serializeUser(function (user, done) {
    done(null, user._id);
});

// called with every user's request
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
})