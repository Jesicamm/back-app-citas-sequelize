const router = require('express').Router();
const clientRouter = require('./routers/client.routers')


// REST RESOURCES

router.use('/users', clientRouter);

// router.use('/countries', countryRouter)


module.exports = router;