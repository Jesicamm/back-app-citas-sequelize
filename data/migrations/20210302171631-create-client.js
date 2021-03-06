'use strict';
module.exports = {


    // Creating the table for the clients
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Clients', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fullName: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
                unique: true
            },
            userName: {
                type: Sequelize.STRING,
                unique: true
            },
            password: {
                type: Sequelize.STRING
            },
            phoneNumber: {
                type: Sequelize.INTEGER,
                unique: true
            },
            birthDate: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            payMethod: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Clients');
    }
};