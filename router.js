const router = require('express').Router();
const appointmentRouter = require('./routers/appointment.router')


// REST RESOURCES

router.use('/appointment', appointmentRouter);


module.exports = router;