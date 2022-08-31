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
    urlImage: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'url_image',
    }
  }, 
  { 
    timestamps: false,
    freezeTableName: true,
    tableName: 'products'
  });

  ProductTable.associate = (models) => {
    ProductTable.belongsToMany(models.Sale, {
      through: 'SalesProducts',
      as: 'products',
      foreignKey: 'product_id',
    });
  };
  
  return ProductTable;
};

module.exports = ProductSchema;
