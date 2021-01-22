const express = require('express');
const router = express.Router();

//Get model
const { model } = require('../database/models');

//Get all campuses
router.get('/', function(req, res, next) {
  model.Campuses.findAll()
    .then(campuses => {
    res.status(200)
    .json({
      message: "GOT ALL CAMPUS",
      campuses
    });
  })
  .catch (error => {
    res.status(404)
    .json({
      message: "ERROR",
      error
    });
  })
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;