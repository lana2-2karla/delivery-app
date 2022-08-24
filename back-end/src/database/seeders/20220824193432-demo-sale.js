'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
        */
      await queryInterface.bulkInsert('sales', [{
        user_id:  1,
        seller_id:  3,
        total_price: 99.0,
        delivery_address: 'Rua Principal,Centro, AquelaCidade',
        delivery_number: '123',
        sale_date: '2022-08-23T12:45:50', 
        status: "Em Trânsito"
      },
      {
        user_id: 2,
        seller_id:  4,
        total_price: 99.0,
        delivery_address: 'Rua Principal,Centro, AquelaCidade',
        delivery_number: '123',
        sale_date: '2022-08-23T12:45:50', 
        status: "Pendente"
      },
      {
        user_id: 7,
        seller_id:  4,
        total_price: 99.0,
        delivery_address: 'Rua Principal,Centro, AquelaCidade',
        delivery_number: '123',
        sale_date: '2022-08-23T12:45:50', 
        status: "Entregue"
      }
    ]);
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});   
  }
};
