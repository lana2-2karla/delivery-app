const userService = require('../services/userService');

const userRegister = async (req, res) => {
  console.log('Req Body', req.body);
  const response = await userService.userRegister(req.body);
  const { message, status } = response;
  res.status(status).json({ message });
};
const usersController = { userRegister };
module.exports = usersController;