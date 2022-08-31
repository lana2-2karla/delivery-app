const userService = require('../services/userService');

const userRegister = async (req, res) => {
  console.log('Req Body', req.body);
  const response = await userService.userRegister(req.body);
  res.status(201).json(response);
};

const getAll = async (req, res) => {
  const response = await userService.getAll();
  res.status(200).json(response);
};
const usersController = { userRegister, getAll };
module.exports = usersController;