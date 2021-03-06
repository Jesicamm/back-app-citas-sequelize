const { Client } = require('../models');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'unapalabrasecreta';
const bcrypt = require('bcryptjs');

class User {

    //GET - Return all Users in the DB

    async findAllClients() {
        return Client.findAll();
    };

    //POST - Registro de usuarios

    async signUpUser(user) {
        user.password = await bcrypt.hash(user.password, 10)
        return Client.create(user)
    };

    //POST - SignUpn a new User in the DB & Login

    async login(email, password) {
        const user = await Client.findOne({ where: { email }})
        if (!user) {
            throw new Error('Email does not exist')
        }
        if (!await bcrypt.compare(password, user.password)) {
            throw new Error('Password incorrect')
        }
        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }
        return jwt.sign(payload, secret);
    }


};

let clientController = new User();
module.exports = clientController;