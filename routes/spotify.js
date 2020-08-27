const router = require('express').Router()
const passport = require('passport')
const ctrl = require('../controllers')

const scope = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-library-modify',
    'user-read-playback-state',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-top-read'
]

router.get('/login', passport.authenticate('spotify', {
        scope: scope,
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

router.get('/verify', ctrl.spotify.verify)

module.exports = router