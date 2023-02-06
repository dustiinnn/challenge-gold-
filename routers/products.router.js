const router = require('express').Router()
const {ProductsController} = require ('../controllers/products.controller')

const productsController = new ProductsController()

router.get('/v1/products', productsController.getProducts)
router.post('/v1/products', productsController.insertProducts)
router.delete('/v1/products/:id', productsController.deleteProducts)

module.exports = router