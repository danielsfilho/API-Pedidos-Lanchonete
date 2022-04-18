const router = require('express').Router()

const ProductsController = require('../controllers/products')
const ClientsController = require('../controllers/clients')

router.get('/client/:id?', ClientsController.get)
router.post('/client', ClientsController.post)
router.put('/client/:id', ClientsController.put)
router.delete('/client/:id', ClientsController.remove)

router.get('/product/:id?', ProductsController.get)
router.post('/product', ProductsController.post)
router.put('/product/:id', ProductsController.put)
router.delete('/product/:id', ProductsController.remove)


module.exports = router