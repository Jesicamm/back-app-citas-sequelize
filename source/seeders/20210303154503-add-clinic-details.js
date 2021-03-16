'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    // Introducing details of the clinic
    
    await queryInterface.bulkInsert('Clinics', [{
      name: 'Clinica Dental JessDieg',
      address: 'Carrer de Almirall Cadarso, 26, 46005 Valencia',
      phoneNumber: 60000001,
      email: "admin@admin.es",
      password: "Admin01",
      birthDate: "15/03/2021",
      role: 'Founder',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('Clinics', null, {});

  }
};
