const router = require('express').Router();
const clientController = require('../controllers/client.controller');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth')

// API routes

//GET - Return all Users in the DB

router.get('/', async(req, res) => {
    try {
        res.json(await clientController.findAllClients())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - LogOut for an user by and specified Id

router.get('/logout/:id', auth, async (req, res) => {
    try {
        const id = req.params.id;
        const user =  await clientController.logOut(id);
        const status = `Hope to see you soon, ${user.fullName}`;
        const notStatus = 'usuario no encontrado'
        if (!user){
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

//GET - User profile By Id

router.get('/:id', auth, async (req, res) => {
    try {

        const id = req.params.id;
        const user =  await clientController.getProfile(id);
        const name = user.fullName;
        const email = user.email;
        const userName = user.userName;
        const phoneNumber = user.phoneNumber;
        const birthDate = user.birthDate;
        const adress = user.adress;
        const payMethod = user.payMethod;
        
        res.json({name,email,userName,phoneNumber,birthDate,adress,payMethod}); 
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


//POST - SignIn a new User in the DB

router.post('/', async(req, res) => {
    try {
        const id = await clientController.signUpUser(req.body);
        const status = 'success';
        res.json({ status, id });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//POST - Login a User in the DB

router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const jwt = await clientController.login(email, password);
        res.json({ jwt })
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
});

module.exports = router;