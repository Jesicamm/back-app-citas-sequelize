'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    

    await queryInterface.bulkInsert('Clinics', [{
      name: 'Clinica Dental JessDieg',
      address: 'Carrer de Almirall Cadarso, 26, 46005 Valencia',
      phoneNumber: 60000001,
      email: "email@email",
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('Clinics', null, {});

  }
};
