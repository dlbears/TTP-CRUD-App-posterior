const express = require('express');
const router = express.Router();

//Get model
const model = require('../database/models');

//Get a campus
router.get('/:id', function(req, res, next) {
  model.Campus.findByPk(req.params.id)
    .then(campus => {
        if (!campus){
            res.status(404)
            .json({
                message: "CANNOT FIND CAMPUS"
            })
        }
    res.status(200)
    .json({
      message: "GOT A CAMPUS",
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