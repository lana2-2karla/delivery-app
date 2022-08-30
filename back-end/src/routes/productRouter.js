const express = require('express');
const productController = require('../controllers/productsController');

const productRouter = express.Router();
productRouter.get('/products', productController.getAll);
module.exports = productRouter;