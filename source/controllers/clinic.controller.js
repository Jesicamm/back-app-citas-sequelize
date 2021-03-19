const { Clinic } = require('../models');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'adminpalabrasecreta';
const bcrypt = require('bcryptjs');

class Admin {

    //GET - Return all Admins in the DB

    async findAllEmployees() {
        return Clinic.findAll();
    };

    //GET - LogOut for an admin by and specified Id

    async logOut(id) {
        return Clinic.findByPk(id);
    };

     //GET - LogOut for an admin by and specified Id

     async getProfile(id) {
        return Clinic.findByPk(id);
    };

    //POST - Sign Up in the Db

    async signUpAdmin(admin) {
        let email = admin.email
        let phoneNumber = admin.phoneNumber
        const adminFound = await Clinic.findOne({ where: {email} || {phoneNumber}})
        if(adminFound){
            throw new Error('Email already registered')
        }
        admin.password = await bcrypt.hash(admin.password, 15)
        return Clinic.create(admin)
    };

    //POST - Login 

    async login(email) {
        const admin = await Clinic.findOne({ where: { email }})
        if (!admin) {
            throw new Error('Email does not exist')
        }
        // if (!await bcrypt.compare(password, admin.password)) {
        //     throw new Error('Password incorrect')
        // }
        // const payload = {
        //     adminId: admin.id,
        //     tokenCreationDate: new Date,
        // }
        // let token = jwt.sign(payload, secret);
        // {admin, token}
        return await Clinic.findOne({ where: { email} })
    }

    

};

let clinicController = new Admin();
module.exports = clinicController;