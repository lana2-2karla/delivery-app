const express = require('express');
const usersController = require('../controllers/usersController');

const registerRouter = express.Router();
registerRouter.get('/register', (req, res) => { res.status(200).json({ message: 'Register' }); });
registerRouter.get('/testeuser', usersController.getAll);
registerRouter.post('/register', usersController.userRegister);
module.exports = registerRouter;