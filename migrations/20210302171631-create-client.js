'use strict';
module.exports = {
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
                primaryKey: true,
            },
            userName: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            password: {
                type: Sequelize.STRING
            },
            phoneNumber: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            birthDate: {
                type: Sequelize.DATE
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