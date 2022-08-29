const AppError = require('../helpers/appError');

const isNullOrEmpty = (field) => (field === null || field === undefined || field === '');

const isShorterThan = (field, value) => field.length < value;

const isInvalidEmail = (email) => {
  const caracter = /\S+@\S+\.\S+/;
  return !caracter.test(email);
};

exports.validateLogin = (req, _res, next) => {
  const { email, password } = req.body;

  if (isNullOrEmpty(email) 
    || isNullOrEmpty(password) 
    || isShorterThan(password, 6) 
    || isInvalidEmail(email)) {
      next(new AppError('invalid fields', 400));
    }

  next();
};