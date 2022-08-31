const express = require('express');
const productController = require('../controllers/productsController');

const customersRouter = express.Router();
customersRouter.get('/customer/products', productController.getAll);
module.exports = customersRouter;