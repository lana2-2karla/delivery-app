const SaleSchema = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_price: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    delivery_address: {
      type: DataTypes.STRING(100),      
    },
    delivery_number: {
      type: DataTypes.STRING(50),
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50)
    }
  },
  { timestamps: false });

  SaleTable.associate = (models) => {
    SaleTable.belongsTo(models.User, {as: 'user', foreignKey: 'user_id'});
    SaleTable.belongsTo(models.User, {as: 'user', foreignKey: 'seller_id'});
    SaleTable.belongsToMany(models.Product, {
      through: 'SalesProducts',
      as: 'sales',
      foreignKey: 'sale_id',
    });
  };
  
  return SaleTable;
};

module.exports = SaleSchema;
