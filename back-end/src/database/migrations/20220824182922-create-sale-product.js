'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        type: Sequelize.INTEGER, 
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
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'sales_products'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};