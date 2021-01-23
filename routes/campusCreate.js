const express = require('express');
const router = express.Router();

//Get model
const model = require('../database/models');

//Get all campuses
router.post('/', function(req, res, next) {
  model.Campus.create({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    address: req.body.address,
    description: req.body.description,
  })
  
  .then(campus => {
    res.status(200)
    .json({
      message: "CREATED A CAMPUS",
      campus
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