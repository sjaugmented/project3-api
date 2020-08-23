const router = require('express').Router()
const ctrl = require('../controllers');

router.get('/', ctrl.playlists.index)



module.exports = router