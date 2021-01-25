const express = require('express');
const router = express.Router();

// Subrouters;
const studentAllRouter = require('./studentAll');
const studentOneRouter = require('./studentOne');
const studentCreateRouter = require('./studentCreate');
const studentDeleteRouter = require('./studentDelete');
const studentUpdateRouter = require('./studentUpdate');

const campusAllRouter = require('./campusAll');
const campusOneRouter = require('./campusOne');
const campusCreateRouter = require('./campusCreate');
const campusDeleteRouter = require('./campusDelete');
const campusUpdateRouter = require('./campusUpdate');


// Mount our subrouters to assemble our apiRouter;
router.use('/studentAll', studentAllRouter);
router.use('/studentOne', studentOneRouter);
router.use('/studentCreate', studentCreateRouter);
router.use('/studentDelete', studentDeleteRouter);
router.use('/studentUpdate', studentUpdateRouter);

router.use('/campusAll', campusAllRouter);
router.use('/campusOne', campusOneRouter);
router.use('/campusCreate', campusCreateRouter);
router.use('/campusDelete', campusDeleteRouter);
router.use('/campusUpdate', campusUpdateRouter);


// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
