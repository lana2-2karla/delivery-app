const express = require('express');
const productController = require('../controllers/productsController');
const customerController = require('../controllers/customersController');
const authMiddleware = require('../services/authService');
const { validateSale, validateStatus } = require('../middlewares/validation');

const router = express.Router();

router
  .route('/customer/products')
  .get(productController.getAll);

router
  .route('/customer/orders')
  .get(customerController.getAllSales)
  .post(validateSale, authMiddleware.authorize, customerController.createSale);

  router
  .route('/customer/orders/:id')
  .get(customerController.getBySaleById)
  .patch(validateStatus, customerController.updateStatus);

module.exports = router;