const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller');
const auth = require('../middlewares/auth');
// const authAdmin = require('../middlewares/authAdmin')

// APPOINTMENT ENDPOINTS

// POST -CREATE NEW APPOINTMENT
router.post('/', async (req, res) => {
    try{
        const {userId, clinicId, appointDate, treatment,covid,payMethod} = req.body
        const appointment = await appointmentController.createAppoint(userId,clinicId,appointDate,treatment, covid,payMethod);
        res.json({appointment});
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

// GET FUTURE APPOINTMENTS BY USER ID USING AUTH TOKEN
router.get('/user/:id',auth, async (req, res) => {
    try{
        const userId = req.params.id
        res.json(await appointmentController.indexAppointByUser(userId))
    }catch(err){
        res.status(500)
        .json({
            message: err.message
        })
    }
})


 // DELETE APPOINTMENT BY USER ID USING AUTH TOKEN
router.delete('/user/:id',auth, async (req, res) => {
    try{
        const userId = req.params.id
        const appointId = req.query.key
        const deleted = await appointmentController.cancelAppointByUser(userId,appointId)
        const status = `Appointment ${appointId} from Client id ${userId} has been deleted`
        res.json({status,deleted})
    }catch(err){
        res.status(500)
        .json({
            message: err.message
        })
    }
})

 // DELETE ANY APPOINTMENT  USING AUTHADMIN TOKEN
 router.delete('/:id', async (req, res) => {
    try{
        const appointId = req.params.id
        const deleted = await appointmentController.cancelAppoint(appointId)
        const status = `Appointment ${appointId} has been deleted`
        res.json({status,deleted})
    }catch(err){
        res.status(500)
        .json({
            message: err.message
        })
    }
})


module.exports = router;