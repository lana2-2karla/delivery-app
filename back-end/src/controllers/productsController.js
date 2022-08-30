const productsService = require('../services/productsService');

const getAll = async (req, res) => {
  const response = await productsService.getAll();
  if (response.message) {
    const { status, message } = response;
    res.status(status).json({ message });
  }
  const { status, payload } = response;
  res.status(status).json(payload);
};
const productController = { getAll };
module.exports = productController;