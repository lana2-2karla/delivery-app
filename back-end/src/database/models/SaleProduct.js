const SaleProductSchema = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProduct', {
    sale_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Sales',
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
        model: 'Products',
        key: 'id'
      },
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  },
  { timestamps: false });

  SaleProductTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Sale, 
      {
        as: 'Sales',
        through: 'SalesProducts', 
        foreignKey: 'sale_id',
        otherKey: 'product_id'
      });

      models.Category.belongsToMany(models.Product, 
        {
          as: 'Products',
          through: 'SalesProducts',  
          foreignKey: 'product_id',
          otherKey: 'sale_id'
        });
  };
  
  return SaleProductTable;
};

module.exports = SaleProductSchema;