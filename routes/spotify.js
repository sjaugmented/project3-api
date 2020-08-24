const router = require('express').Router()
const passport = require('passport')
const ctrl = require('../controllers')

router.get('/login', passport.authenticate('spotify', {
        scope: ['user-read-email', 'user-read-private'],
        showDialog: true
    }),
    ctrl.spotify.login
)

router.get('/callback', passport.authenticate('spotify', {
        failureRedirect: '/api/v1/auth/login'
    }),
    ctrl.spotify.callback
)

router.get('/logout', ctrl.spotify.logout)

module.exports = router