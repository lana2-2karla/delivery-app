'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('users', [
        {
          name: "Anderson Raul da Cruz",
          email: "andersoncruz@vianetfone.com.br",
          password: "14e1b600b1fd579f47433b88e8d85291",
          role: 'customer'
          
        },
        {
          name: "Murilo Giovanni Enzo Gonçalves",
          email: "murilo_goncalves@jammer.com.br",
          password: "14e1b600b1fd579f47433b88e8d85291",
          role: 'customer'
          
        },
        {
          name: "Nicole Luana Giovanna da Cunha",
          email: "nicoleluanadacunha@technicolor.com",
          password: "14e1b600b1fd579f47433b88e8d85291",
          role: 'seller'
          
        },
        {
          name: "Tomás Calebe Costa",
          email: "tomas_costa@nacirembalagens.com.br",
          password: "14e1b600b1fd579f47433b88e8d85291",
          role: 'seller'
        },
        {
          name: "Emanuel Leandro Arthur Monteiro",
          email: "emanuel-monteiro99@coraza.com.br",
          password: "14e1b600b1fd579f47433b88e8d85291",
          role: 'customer'
          
        },
        {
          name: "Iago Raimundo da Mata",	
          email: "iago-damata85@zoomfoccus.com.br",
          password: "14e1b600b1fd579f47433b88e8d85291",
          role: 'administrator'	
        },
        {
          name: "Thales Manoel Galvão",
          email: "thales-galvao84@sent.com",
          password: "14e1b600b1fd579f47433b88e8d85291",
          role: 'customer'
        },
        {
          name: "Tatiane Elza Lavínia Moura",	
          email: "tatiane_elza_moura@reconciliare.com.br",
          password: "14e1b600b1fd579f47433b88e8d85291",
          role: 'administrator'	
        }
        ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});   
  }
};
