const AppError = require('../helpers/appError');
const statusOptions = require('../helpers/enums');

const isNullOrEmpty = (field) => (field === null || field === undefined || field === '');

const isShorterThan = (field, value) => field.length < value;

const isInvalidEmail = (email) => {
  const caracter = /\S+@\S+\.\S+/;
  return !caracter.test(email);
};

const validateId = (req, next) => {
  const { userId, sellerId } = req.body;
  if (isNullOrEmpty(userId)) {
    return next(new AppError('"userId" is required', 400));
  }
  if (isNullOrEmpty(sellerId)) {
    return next(new AppError('"sellerId" is required', 400));
  }
};

const validateDeliveryInfo = (req, next) => {
  const { totalPrice, deliveryAddress, deliveryNumber } = req.body;
  if (isNullOrEmpty(totalPrice)) {
    return next(new AppError('"totalPrice" is required', 400));
  }
  if (isNullOrEmpty(deliveryAddress)) {
    return next(new AppError('"deliveryAddress" is required', 400));
  }
  if (isNullOrEmpty(deliveryNumber)) {
    return next(new AppError('"deliveryNumber" is required', 400));
  }
};
const validateProduct = (prod, next) => {
  const elements = Object.keys(prod);
  const hasProp = elements.includes('productId') 
    && elements.includes('name') 
    && elements.includes('quantity');
  
  if (!hasProp) {
    return next(new AppError('"products" must have properties "productId", "name" and "quantity"',
    400));
  }
};

const validateSoldProducts = (req, next) => {
  const { products } = req.body;
  if (isNullOrEmpty(products)) {
    return next(new AppError('"products" is required', 400));
  }
  if (!Array.isArray(products)) {
    return next(new AppError('"products" must be an array', 400));
  }
  if (Object.keys(products).length === 0) {
    return next(new AppError('"products" must not be empty', 400));
  }
  products.forEach((element) => {
    if (Object.keys(element).length !== 3) {
      return next(new AppError('"products" must have only 3 properties',
       400));
    }
    return validateProduct(element, next);
  });
};

exports.validateLogin = (req, _res, next) => {
  const { email, password } = req.body;

  if (isNullOrEmpty(email) 
    || isNullOrEmpty(password) 
    || isShorterThan(password, 6) 
    || isInvalidEmail(email)) {
      return next(new AppError('invalid fields', 400));
    }

  next();
};

exports.validateSale = (req, _res, next) => {
  validateId(req, next);
  validateDeliveryInfo(req, next);
  validateSoldProducts(req, next);
  next();
};

exports.validateStatus = (req, _res, next) => {
  const { status } = req.body;

  if (isNullOrEmpty(status)) {
    return next(new AppError('"status" is required', 400));
  }

  if (!statusOptions.includes(status)) {
      return next(new AppError('Status invalid', 400));
  }
  next();
};