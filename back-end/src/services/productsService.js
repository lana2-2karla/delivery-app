const { Product } = require('../database/models');

const getAll = async () => {
const products = await Product.findAll();
// console.log('products', products);
if (!products) {
  return { status: 404, message: 'Products not found' };
}
return { status: 200, payload: products };
};

const productsService = { getAll };
module.exports = productsService;