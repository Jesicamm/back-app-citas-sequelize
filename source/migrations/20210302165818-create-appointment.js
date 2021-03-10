'use strict';
module.exports = {

    // Creating the table for the appointments
    
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Appointments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            appointDate: {
                type: Sequelize.DATE
            },
            price: {
                type: Sequelize.INTEGER,
                defaultValue: 50
            },
            payMethod: {
                type: Sequelize.STRING
            },
            treatment: {
                type: Sequelize.STRING
            },
            covid: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
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
        await queryInterface.dropTable('Appointments');
    }
};