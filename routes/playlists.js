const router = require('express').Router()
const ctrl = require('../controllers');

router.get('/', ctrl.playlists.index)
router.get('/playlist/:id',ctrl.playlists.show)

module.exports = router