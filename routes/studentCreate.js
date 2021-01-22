const express = require('express');
const router = express.Router();

//Get model
const model = require('../database/models');

//Create a student
router.post('/', function(req, res, next) {
  model.Student.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      imageUrl: req.body.imageUrl,
      gpa: req.body.gpa,
      campusId: req.body.campusId,
  })

  .then((student, studentId) => {
    res.status(200)
    .json({
      message: "CREATED A STUDENT",
      student, 
      studentId
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