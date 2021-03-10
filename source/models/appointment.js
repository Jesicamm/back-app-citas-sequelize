'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Appointment extends Model {
        

        // defining association here
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
        covid: DataTypes.BOOLEAN,
        payMethod: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Appointment',
    });
    return Appointment;
};