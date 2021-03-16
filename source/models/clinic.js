'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
    
    };
    Clinic.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        birthDate: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};