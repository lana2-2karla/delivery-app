const ProductSchema = (sequelize, DataTypes) => {
  const ProductTable = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    url_image: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, 
  { timestamps: false });

  ProductTable.associate = (models) => {
    SaleTable.belongsToMany(models.Sale, {
      through: 'salesProducts',
      as: 'products',
      foreignKey: 'product_id',
    });
  };
  
  return ProductTable;
};

module.exports = ProductSchema;
