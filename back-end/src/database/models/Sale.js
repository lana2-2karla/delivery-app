const SaleSchema = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'seller_id', 
      references: {
        model: 'users',
        key: 'id'
      }
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      field: 'total_price'
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      field: 'delivery_address',      
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      field: 'delivery_number'      
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'sale_date'      
    },
    status: {
      type: DataTypes.STRING(50)
    }
  },
  { 
    timestamps: false,
    freezeTableName: true,
    tableName: 'sales'
  });

  SaleTable.associate = (models) => {
    SaleTable.belongsTo(models.User, {as: 'user', foreignKey: 'user_id'});
    SaleTable.belongsTo(models.User, {as: 'seller', foreignKey: 'seller_id'});
    SaleTable.belongsToMany(models.Product, {as: 'products', through: models.SaleProduct, foreignKey: 'sale_id', otherKey: 'product_id' });

  };
  
  return SaleTable;
};

module.exports = SaleSchema;
