'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return [queryInterface.addColumn(
                'Appointments', // name of Source model
                'userId', // name of the key we're adding 
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Clients', // name of Target model
                        key: 'id' // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                }),
            queryInterface.addColumn(
                'Appointments', // name of Source model
                'clinicId', // name of the key we're adding 
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Clinics', // name of Target model
                        key: 'id' // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                })
        ]
    },

    down: async(queryInterface, Sequelize) => {
        return [queryInterface.revomeColumn(
                'Appointments', // name of Source model
                'userId', // name of the key we're adding 
            ),
            queryInterface.revomeColumn(
                'Appointments', // name of Source model
                'clinicId', // name of the key we're adding 
            )
        ]
    }
};