const router = require('express').Router()
const spotifyCtrl = require('../controllers/spotify')

router.get('/', spotifyCtrl.home)
router.get('/login', spotifyCtrl.login)
router.get('/callback', spotifyCtrl.callback)
router.get('/refresh_token', spotifyCtrl.refresh)

module.exports = router