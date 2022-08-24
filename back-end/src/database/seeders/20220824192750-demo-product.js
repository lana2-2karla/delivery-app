'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('products', [{
       name: 'Cachaça Pinga Boa',
       price: 99.0,
       url_image: 'https://www.apacs.com.br/wp-content/uploads/2018/06/Cachaca-Canarinha.jpg'
     },
     {
      name: '51',
      price: 72.0,
      url_image: 'https://santaluzia.vteximg.com.br/arquivos/ids/963786/1137840.jpg'
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});    
  }
};
