const controller = require('../controllers/artist');
const router = require('express').Router();

router
    .get('/', controller.getAll)
    // .get('/:name', controller.getByName)
    .get('/:id', controller.getOne)
    .post('/', controller.createOne)
    .put('/:id', controller.updateOne)
    .delete('/:id', controller.deleteOne)

module.exports = router;