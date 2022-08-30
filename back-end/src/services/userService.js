const md5 = require('md5');
const { User } = require('../database/models');

const userRegister = async (body) => {
  const findUserByEmail = await User.findOne({ where: { email: body.email } });
  if (findUserByEmail) {
    return { status: 409, message: 'email already exists' };
  }
  const passwordHash = md5(body.password);
  const newUSer = { ...body, password: passwordHash };
   await User.create(newUSer);
  return { status: 201, message: 'User Register' };
};
const userService = { userRegister };
module.exports = userService;