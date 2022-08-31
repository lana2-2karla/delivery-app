const express = require('express');
const sellerController = require('../controllers/sellersControllers');

const sellerRouter = express.Router();
sellerRouter.get('/seller/orders', sellerController.getAll);
// sellerRouter.get('/seller/orders/:id', sellerController.getById);
module.exports = sellerRouter;