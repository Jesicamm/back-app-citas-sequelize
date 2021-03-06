'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Client extends Model {
       
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

// const Client = sequelize.define('Client', attributes, {});

// Client.prototype.toJSON =  function () {
//   const values = Object.assign({}, this.get());

//   delete values.password;
//   return values;
// }

