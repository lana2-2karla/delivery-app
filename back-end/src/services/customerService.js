const { Product, Sale, SaleProduct, User } = require('../database/models');
const { sequelize } = require('../database/models/index');
const AppError = require('../helpers/appError');

const sanatizeSale = (cmd) => ({
  userId: cmd.userId,
  sellerId: cmd.sellerId,
  totalPrice: cmd.totalPrice,
  deliveryAddress: cmd.deliveryAddress,
  deliveryNumber: cmd.deliveryNumber,
  saleDate: new Date().toUTCString(),
  status: 'Pendente',
});

const saveProducts = async (saleId, products, t) => {
  await Promise.all(products.map(({ id, quantity }) => (
    SaleProduct.create(
      {
        saleId,
        productId: id,
        quantity,
      }, { transaction: t },
    )
  )));
};

const includeFields = () => (
  {
    attributes: { exclude: ['userId', 'sellerId'] },
    include: [
      { model: User, 
        as: 'user', 
        attributes: { exclude: ['password', 'role'] },
      },
      { model: User, 
        as: 'seller', 
        attributes: { exclude: ['password', 'role'] },
      },
      {
        model: Product,
        as: 'products',
        through: { attributes: ['quantity'] },
      },
    ],
  }
);

exports.create = async (cmd) => {
  const result = await sequelize.transaction(async (t) => {
    try {
      const model = sanatizeSale(cmd);
      const sale = await Sale.create(model, { transaction: t });
      await saveProducts(sale.id, cmd.products, t);
  
      return sale;
    } catch (err) {
      throw new AppError(`Error DB: ${err.message}`, 500);
    }
  });
  return result;
};

exports.getAllByUser = async (userId) => {
  try {
    const sales = await Sale.findAll(
      {
        where: { userId }, 
        ...includeFields(),
      },
      );
    return sales;
  } catch (err) {
    throw new AppError(`Error DB: ${err.message}`, 500);
  }
};

exports.getById = async (id) => {
  const sale = await Sale.findByPk(id, includeFields());
  return sale;
};

exports.updateStatus = async (id, status) => {
  const updated = await Sale.update({ status }, { where: { id } });
  return updated;
};