'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Client extends Model {
       

        // defining association here
        static associate(models) {
            this.hasMany(models.Appointment, {
                as: 'service',
                foreignKey: 'appointId'
            });
            
        }
    };
    Client.init({
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER,
        birthDate: DataTypes.STRING,
        address: DataTypes.STRING,
        payMethod: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Client',
    });
    return Client;
};