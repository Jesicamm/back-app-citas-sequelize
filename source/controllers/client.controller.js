const { Client } = require('../models');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'unapalabrasecreta';
const bcrypt = require('bcryptjs');

class User {

    //GET - Return all Users in the DB

    async findAllClients() {
        return Client.findAll();
    };

    //GET - LogOut for an user by and specified Id

    async logOut(id) {
        return Client.findByPk(id);
    };

     //GET - LogOut for an user by and specified Id

     async getProfile(id) {
        return Client.findByPk(id);
    };

    //POST - Sign Up in the Db

    async signUpUser(user) {
        let email = user.email
        let userName = user.userName
        let phoneNumber = user.phoneNumber
        const userFound = await Client.findOne({ where: {email} || {userName} || {phoneNumber}})
        if(userFound){
            throw new Error('Email already registered')
        }
        user.password = await bcrypt.hash(user.password, 10)
        return Client.create(user)
    };

    //POST - Login 

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