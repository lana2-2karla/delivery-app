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

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await customerService.getById(+id);
    console.log('response', response);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const updateStatus = async (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    const response = await customerService.updateStatus(+id, status);
    console.log('response', response);
    res.status(200).json({ message: 'Status updated!' });
  } catch (err) {
    next(err);
  }
};
const sellerController = { getAll, getById, updateStatus };
module.exports = sellerController;

const sellersService = require('../services/sellerService');

exports.getAllSellers = async (req, res, next) => {
  try {
    const sellers = await sellersService.getAll();
    res.status(200).json(sellers);    
  } catch (error) {
    next(error);    
  }
};
