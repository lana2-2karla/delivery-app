const SaleProductSchema = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProduct', {
    sale_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'sales',
        key: 'id'
      },
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      },
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  },
  { 
    timestamps: false,
    freezeTableName: true,
    tableName: 'salesProducts'
  });

  SaleProductTable.associate = (models) => {
    models.Product.belongsToMany(models.Sale, 
      {
        as: 'sales',
        through: SaleProductTable, 
        foreignKey: 'sale_id',
        otherKey: 'product_id'
      });

    models.Sale.belongsToMany(models.Product, 
      {
        as: 'products',
        through: SaleProductTable,  
        foreignKey: 'product_id',
        otherKey: 'sale_id'
      });
  };
  
  return SaleProductTable;
};

module.exports = SaleProductSchema;