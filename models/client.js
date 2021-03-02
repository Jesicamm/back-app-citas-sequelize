'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Client extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Appointment, {
                as: 'service',
                foreignKey: 'appointId'
            });
            // define association here
        }
    };
    Client.init({
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER,
        birthDate: DataTypes.DATE,
        address: DataTypes.STRING,
        payMethod: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Client',
    });
    return Client;
};