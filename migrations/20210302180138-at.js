'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Clinics', // name of Source model
            'appointId', // name of the key we're adding 
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Appointments', // name of Target model
                    key: 'id' // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        )

    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.revomeColumn(
            'Clinics', // name of Source model
            'appointId', // name of the key we're adding 
        );
    }
};