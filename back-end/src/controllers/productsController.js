const getAll = (req, res) => {
  res.status(200).json({ message: 'Products' });
};
const productController = { getAll };
module.exports = productController;