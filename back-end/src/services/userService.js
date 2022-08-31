const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('./authService');

const userRegister = async (body) => {
  const findUserByEmail = await User.findOne({ where: { email: body.email } });
  if (findUserByEmail) {
    return { status: 409, message: 'email already exists' };
  }
  const passwordHash = md5(body.password);
  const newUSer = { ...body, password: passwordHash };
   await User.create(newUSer);
   const user = { name: newUSer.name, id: newUSer.id, email: newUSer.email, role: newUSer.role };
   const token = await generateToken(user);

  return { status: 201, token };
};
const userService = { userRegister };
module.exports = userService;