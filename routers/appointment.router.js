const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller');


// APPOINTMENT ENDPOINTS

// POST -CREATE NEW APPOINTMENT

router.post('/', async (req, res) => {
    try{
        const userId = req.body.userId;
        const clinicId = req.body.clinicId;
        const appointDate = req.body.appointDate;
        const treatment = req.body.treatment;
        const appointment = await appointmentController.createAppoint(userId,clinicId,appointDate,treatment);
        const status = 'success';
        res.json({status,appointment});
    } catch( err ){
        return res.status(404).json({
            message: 'You are trying to create an appointment for a non-existent user'
        });
    }
});



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