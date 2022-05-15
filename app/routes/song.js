const controller = require('../controllers/song');
const router = require('express').Router();

router
    .get('/', controller.getAll)
    .get('/album/:albumId', controller.getByAlbum)
    .get('/:id', controller.getOne)
    .post('/', controller.createOne)
    .put('/:id', controller.updateOne)
    .delete('/:id', controller.deleteOne)

module.exports = router;