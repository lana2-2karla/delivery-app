const { Sale, SaleProduct } = require('../database/models');
const { sequelize } = require('../database/models/index');

const sanatizeSale = (cmd) => ({
  userId: cmd.userId,
  sellerId: cmd.sellerId,
  totalPrice: cmd.totalPrice,
  deliveryAddress: cmd.deliveryAddress,
  deliveryNumber: cmd.deliveryNumber,
  saleDate: new Date().toUTCString(),
  status: 'Pendente',
});

exports.createSale = async (cmd, productId) => {
  const transaction = await sequelize.transaction();
  try {
    const model = sanatizeSale(cmd);
    const sale = await Sale.create(model, { transaction });

      await SaleProduct.create(
        {
          saleId: sale.id,
          productId,
        },
        { transaction },
      );
      await transaction.commit();
      
      return sale.id;
  } catch (err) {
    await transaction.rollback();
  }
};