'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Clients', [
      {
        fullName: 'Jesica Morocho',
        email: "email@email",
        userName: "jesicamm",
        password: "12345",
        phoneNumber: 60000002,
        birthDate: "1990/01/01",
        address: 'Carrer falsa 1',
        payMethod: 'Mastercard',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        fullName: 'Diego Garcia',
        email: "email1@email1",
        userName: "diegogb-08",
        password: "12345",
        phoneNumber: 60000003,
        birthDate: "1987/05/01",
        address: 'Carrer falsa 1',
        payMethod: 'Mastercard',
        createdAt: new Date,
        updatedAt: new Date,
      }

  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
