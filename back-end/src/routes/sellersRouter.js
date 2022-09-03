const express = require('express');
const sellersController = require('../controllers/sellersControllers');

const router = express.Router();

router
.route('/user/sellers')
.get(sellersController.getAllSellers);

module.exports = router;