const controller = require('../controllers/address');
const router = require('express').Router();

router
    .get('/', controller.getAll)
    .get('/user/:userId', controller.getByUser)
    .get('/:id', controller.getOne)
    .post('/', controller.createOne)
    .put('/:id', controller.updateOne)
    .delete('/:id', controller.deleteOne)

module.exports = router;