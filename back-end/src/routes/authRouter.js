const express = require('express');
const authController = require('../controllers/authController');
const { validateLogin } = require('../middlewares/validation');

const router = express.Router();

router.route('/login').post(validateLogin, authController.login);

module.exports = router;