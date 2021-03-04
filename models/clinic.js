'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        
        // static associate(models) {

        // }
    };
    Clinic.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};