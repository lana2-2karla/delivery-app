const customerService = require('../services/customerService');

exports.createSale = async (req, res, next) => {
  try {
    const saleId = await customerService.createSale(req.body);
    res.status(201).json({ status: 'Venda feita com sucesso!', saleId });    
  } catch (err) {
    next(err);
  }
};
