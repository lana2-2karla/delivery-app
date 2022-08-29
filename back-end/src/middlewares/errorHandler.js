const dotenv = require('dotenv');

dotenv.config();

const sendError = (err, res, statusCode) => {
  console.log('msg: ->', err.message);

  res.status(statusCode).json({
    message: err.message,
  });
};

const sendErrorDev = (err, res, statusCode) => {
  console.log('msg: --->', err.message);
  res.status(statusCode).json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = (err, _req, res, _next) => {
  const code = err.statusCode || 500;
  if (process.env.NODE_ENV === 'development' 
    || process.env.NODE_ENV === 'test') {
    sendErrorDev(err, res, code);
  } else {
    sendError(err, res, code);
  }
};