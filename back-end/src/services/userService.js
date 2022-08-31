const md5 = require('md5');
const { User } = require('../database/models');

const userRegister = async (body) => {
  const passwordHash = md5(body.password);
  console.log('hash', passwordHash);
  const newUSer = { ...body, password: passwordHash };
  console.log('New User', newUSer);
  const result = await User.create(newUSer);
  console.log('result', result);
  return { message: 'Registrado' };
};
const getAll = async () => {
  const users = await User.findAll();
  console.log('users', users);
  return users;
};

const userService = { userRegister, getAll };
module.exports = userService;