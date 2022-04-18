const router = require('express').Router()

const ProductsController = require('../controllers/products')
const ClientsController = require('../controllers/clients')

router.get('/client/:id?', ProductsController.get)
router.post('/client', ProductsController.post)
router.put('/client/:id', ProductsController.put)
router.delete('/client/:id', ProductsController.remove)

router.get('/product/:id?', ClientsController.get)
router.post('/product', ClientsController.post)
router.put('/product/:id', ClientsController.put)
router.delete('/product/:id', ClientsController.remove)


module.exports = router