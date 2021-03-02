const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller');


// APPOINTMENT ENDPOINTS



// GET ALL APPOINTMENTS

router.get('/',async (req,res) => {
    try{
        res.json(await appointmentController.indexAll())
    }catch(err){
        res.status(500)
        .json({
            message: err.message
        })
    }
})







module.exports = router;