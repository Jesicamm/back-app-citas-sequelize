'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Appointment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Clinic, {
                as: 'clinics',
                foreignKey: 'clinicId'
            });
            this.belongsTo(models.Client, {
                as: 'clients',
                foreignKey: 'userId'
            })
        }

    };
    Appointment.init({
        appointDate: DataTypes.DATE,
        price: DataTypes.INTEGER,
        treatment: DataTypes.STRING,
        covid: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Appointment',
    });
    return Appointment;
};