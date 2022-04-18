const router = require('express').Router()

const ProductsController = require('../controllers/products')

router.get('/client/:id?', ProductsController.get)
router.post('/client', ProductsController.post)
router.put('/client/:id', ProductsController.put)
router.delete('/client/:id', ProductsController.remove)

module.exports = router