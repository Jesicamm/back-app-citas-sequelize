const router = require('express').Router();
const appointmentRouter = require('./routers/appointment.router');
const clientRouter = require('./routers/client.routers')

// REST RESOURCES
router.use('/appointment', appointmentRouter);
router.use('/users', clientRouter);

module.exports = router;