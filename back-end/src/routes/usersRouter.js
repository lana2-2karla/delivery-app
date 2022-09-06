const express = require('express');
const usersController = require('../controllers/usersController');
// const sellersController = require('../controllers/sellersControllers');

const registerRouter = express.Router();
registerRouter.get('/register', (req, res) => { res.status(200).json({ message: 'Register' }); });
registerRouter.post('/register', usersController.userRegister);
module.exports = registerRouter;

// const router = express.Router();

// router
// .route('/user/sellers')
// .get(sellersController.getAllSellers);

// module.exports = router;