const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy
const User = require('../models/user')

passport.use(
    new SpotifyStrategy({
            clientID: '3dfb23664b73446abdb76ccb50b15c0e',
            clientSecret: 'e29b4852ce444bb29a99f925eac5f98f',
            callbackURL: 'http://localhost:3001/api/v1/auth/callback/'
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
                        console.log('>>>>>>>>>>>>>>>>>>>>>>>')
                        console.log('user:', user)
                    } else {
                        // new user!
                        const newUser = new User({
                            spotifyId: profile.id,
                            name: profile.displayName,
                            token: refreshToken,
                            loggedIn: true
                        })
                        console.log('>>>>>>>>>>>>>>>>>>>>>>');
                        console.log('newUser:', newUser)
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