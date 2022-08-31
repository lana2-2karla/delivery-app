const express = require('express');
const customerController = require('../controllers/customersController');
const authMiddleware = require('../services/authService');

const router = express.Router();

router
  .route('/customer/orders')
  .post(authMiddleware.authorize, customerController.createSale);

module.exports = router;