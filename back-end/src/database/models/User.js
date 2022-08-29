
const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { timestamps: false, });

UserTable.associate = (models) => {
  UserTable.hasMany(models.Sale, {as: 'sales', foreignKey: 'id'});
  // UserTable.hasMany(models.Sale, {as: 'sales', foreignKey: 'seller_id'});
};

return UserTable
};

module.exports = UserSchema;