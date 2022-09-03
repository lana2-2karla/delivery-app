const sellersService = require('../services/sellerService');

exports.getAllSellers = async (req, res, next) => {
  try {
    const sellers = await sellersService.getAll();
    res.status(200).json(sellers);    
  } catch (error) {
    next(error);    
  }
};