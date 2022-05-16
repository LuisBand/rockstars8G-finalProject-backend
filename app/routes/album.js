const controller = require('../controllers/album');
const router = require('express').Router();

router
    .get('/', controller.getAll)
    .get('/artist/:artistId', controller.getByArtist)
    .get('/:id', controller.getOne)
    .post('/', controller.createOne)
    .put('/:id', controller.updateOne)
    .delete('/:id', controller.deleteOne)

module.exports = router;