const router = require('express').Router();
const clientController = require('../controllers/client.controller');
const jwt = require('jsonwebtoken');

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

// GET - LogOut

router.get('/logOut', async(req, res) => {
    try {
        /*  const client = await clientController.logOut() */
        const status = 'Welcome back Soon';
        res.json({ status });
    } catch (err) {
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
    } catch (error) {
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