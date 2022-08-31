require('dotenv').config();
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../database/models');
const AppError = require('../helpers/appError');

const findUser = async (cmd) => {
  const { email } = cmd;
  const password = md5(cmd.password);
  const user = await User.findOne({ where: {
    email,
    password,
  },
});
return user;
};

exports.generateToken = (user) => {
  const secret = 'secret_key';
  return jwt.sign({ id: user.id, role: user.role, name: user.name, email: user.email },
    secret, { expiresIn: '30d' });
};

exports.login = async (cmd) => {
  const user = await findUser(cmd);
  if (!user) throw new AppError('user not found. Invalid fields.', 404);
  
  const token = this.generateToken(user);
  
  return token;
};