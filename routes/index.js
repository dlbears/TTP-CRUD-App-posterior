const express = require('express');
const { Campuses } = require('../database/models');
const router = express.Router();

// Subrouters;
const studentsAllRouter = require('./studentsAll');
//const studentsOneRouter = require('./studentsOne');
const studentsCreateRouter = require('./studentsCreate');
//const studentsDeleteRouter = require('./studentsDelete');

const campusesAllRouter = require('./campusesAll');
//const campusesOneRouter = require('./campusesOne');
const campusesCreateRouter = require('./campusesCreate');
//const campusesDeleteRouter = require('./campusesDelete');


// Mount our subrouters to assemble our apiRouter;
router.use('/studentsAll', studentsAllRouter);
//router.use('/studentsOne', studentsOneRouter);
router.use('/studentsCreate', studentsCreateRouter);
//router.use('/studentsDelete', studentsDeleteRouter);

router.use('/campusesAll', campusesAllRouter);
//router.use('/campusesOne', campusesOneRouter);
router.use('/campusesCreate', campusesCreateRouter);
//router.use('/campusesDelete', campusesDeleteRouter);


// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
