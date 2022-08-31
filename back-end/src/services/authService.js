require('dotenv').config();
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
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

const generateToken = (user) => {
  const secret = 'secret_key';
  return jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: '30d' });
};

const decodeToken = async (token) => {
  try {
    const secret = 'secret_key';
    const decoded = await promisify(jwt.verify)(token, secret);
    const currentUser = await User.findByPk(decoded.id);

    if (!currentUser) {
      throw new AppError('No User found with this ID', 401);
    }
  } catch (err) {
    throw new AppError(err.message, 401);
  }
};

exports.login = async (cmd) => {
  const user = await findUser(cmd);
  if (!user) throw new AppError('user not found. Invalid fields.', 404);
  
  const token = generateToken(user);
  
  return token;
};

exports.authorize = async (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(new AppError('Token missing', 401));
  }
  await decodeToken(authorization);
  next();
};