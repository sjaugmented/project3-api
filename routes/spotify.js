const router = require('express').Router()
const passport = require('passport')

router.get('/login', passport.authenticate('spotify', {
        scope: ['user-read-email', 'user-read-private'],
        showDialog: true
    }),
    function (req, res) {
        // The request will be redirected to spotify for authentication, so this
        // function will not be called.
    }
)

router.get('/callback', passport.authenticate('spotify', {
        failureRedirect: '/api/v1/auth/login'
    }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000/');
    }
)

module.exports = router