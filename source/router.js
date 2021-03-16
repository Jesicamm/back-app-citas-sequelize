const router = require('express').Router();
const appointmentRouter = require('./routers/appointment.router');
const clientRouter = require('./routers/client.routers')
const clinicRouter = require('./routers/clinic.routers')

// REST RESOURCES
router.use('/appointment', appointmentRouter);
router.use('/user', clientRouter);
router.use('/admin', clinicRouter);

module.exports = router;