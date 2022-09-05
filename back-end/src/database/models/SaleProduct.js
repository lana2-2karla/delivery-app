const SaleProductSchema = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProduct', {
    saleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'sales',
        key: 'id'
      },
      field: 'sale_id',     
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      },
      field: 'product_id',
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  },
  { 
    timestamps: false,
    freezeTableName: true,
    tableName: 'sales_products'
  });

  // SaleProductTable.associate = (models) => {
  //   models.Product.belongsToMany(models.Sale, 
  //     {
  //       as: 'vendas',
  //       through: SaleProductTable, 
  //       foreignKey: 'saleId',
  //       otherKey: 'productId'
  //     });

  //   models.Sale.belongsToMany(models.Product, 
  //     {
  //       as: 'produtos',
  //       through: SaleProductTable,  
  //       foreignKey: 'product_id',
  //       otherKey: 'sale_id'
  //     });
  // };
  
  return SaleProductTable;
};

module.exports = SaleProductSchema;