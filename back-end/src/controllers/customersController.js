const customerService = require('../services/customerService');

exports.createSale = async (req, res, next) => {
  try {
    const sale = await customerService.create(req.body);
    console.log(sale);
    res.status(201).json(sale);    
  } catch (err) {
    next(err);
  }
};

exports.getAllSales = async (_req, res, next) => {
  try {
    const sales = await customerService.getAll();
    res.status(200).json(sales);    
  } catch (error) {
    next(error);    
  }
};

exports.getBySaleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const saleId = Number(id);
    const sale = await customerService.getById(saleId);
    res.status(200).json(sale);    
  } catch (error) {
    next(error);    
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const saleId = Number(id);
    await customerService.updateStatus(saleId, status);
    res.status(200).json({ message: 'Status updated!' });    
  } catch (error) {
    next(error);   
  }
};
