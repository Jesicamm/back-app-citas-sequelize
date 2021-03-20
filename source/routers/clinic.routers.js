const router = require('express').Router();
const clinicController = require('../controllers/clinic.controller');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authAdmin = require('../middlewares/authAdmin')

// API routes

//GET - Return all Employees in the DB

router.get('/', async(req, res) => {
    try {
        res.json(await clinicController.findAllEmployees())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - LogOut for an admin by and specified Id

router.get('/logout/:id', authAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        const admin =  await clinicController.logOut(id);
        const status = `Hope to see you soon, ${admin.name}`;
        const notStatus = 'Admin not found'
        if (!admin){
            res.json({notStatus})
        }else{
        res.json({ status, id }); 
        }
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Admin profile By Id

router.get('/:id', authAdmin, async (req, res) => {
    try {

        const id = req.params.id;
        const admin =  await clinicController.getProfile(id);
        const name = admin.name;
        const email = admin.email;
        const phoneNumber = admin.phoneNumber;
        const birthDate = admin.birthDate;
        const address = admin.address;
        const role = admin.role
        
        res.json({name,email,phoneNumber,birthDate,address,role}); 
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


//POST - SignIn a new Admin in the DB

router.post('/', async(req, res) => {
    try {
        const admin = await clinicController.signUpAdmin(req.body);
        const status = 'success';
        res.json({ status, admin });
    } catch (err) {
        return res.status(409).json({
            message: err.message
        });
    }
});

//POST - Login a Admin in the DB

router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await clinicController.login(email,password)
        res.json(admin)
    } catch (error) {
        return res.status(409).json({
            message: error.message
        });
    }
});

module.exports = router;