const customerService = require('../services/customerService');
const authService = require('../services/authService');
const sellersService = require('../services/sellerService');

const getAll = async (req, res, next) => {
try {
  const { authorization } = req.headers;
  console.log('authorization', authorization);
  const { id } = await authService.decodeToken(authorization);
  const response = await customerService.getAllBySeller(+id);
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

const getAllSellers = async (req, res, next) => {
  try {
    const sellers = await sellersService.getAll();
    res.status(200).json(sellers);    
  } catch (error) {
    next(error);    
  }
};

const sellerController = { getAll, getById, updateStatus, getAllSellers };
module.exports = sellerController;