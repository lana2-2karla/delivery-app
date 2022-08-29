'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
        */
      await queryInterface.bulkInsert('Sales', [{
        user_id:  1,
        seller_id:  2,
        total_price: 7.5,
        delivery_address: 'Rua Principal,Centro, AquelaCidade',
        delivery_number: '123',
        sale_date: '2022-08-23T12:45:50', 
        status: "Em Trânsito"
      },
      {
        user_id: 1,
        seller_id:  2,
        total_price: 2.2,
        delivery_address: 'Rua Principal,Centro, AquelaCidade',
        delivery_number: '123',
        sale_date: '2022-08-23T12:45:50', 
        status: "Pendente"
      },
      {
        user_id: 1,
        seller_id:  2,
        total_price: 7.5,
        delivery_address: 'Rua Principal,Centro, AquelaCidade',
        delivery_number: '123',
        sale_date: '2022-08-23T12:45:50', 
        status: "Entregue"
      }
    ]);
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});   
  }
};
