const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.spotify.home)
router.get('/login', ctrl.spotify.login)
router.get('/callback', ctrl.spotify.callback)
router.get('/refresh_token', ctrl.spotify.refresh)

module.exports = router