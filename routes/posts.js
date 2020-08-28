const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.posts.index)
router.get('/:id', ctrl.posts.show)
router.post('/:id', ctrl.posts.create)
router.delete('/:songId', ctrl.posts.destroy)
router.put('/:songId', ctrl.posts.update)

module.exports = router