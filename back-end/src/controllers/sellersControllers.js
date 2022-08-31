const customerService = require('../services/customerService');

const getAll = async (req, res, next) => {
try {
  const response = await customerService.getAll();
  console.log('response', response);
  res.status(200).json(response);
} catch (err) {
  next(err);
}
};

const sellerController = { getAll };
module.exports = sellerController;