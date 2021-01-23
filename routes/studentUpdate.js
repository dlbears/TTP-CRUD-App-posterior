const express = require('express');
const router = express.Router();

//Get model
const model = require('../database/models');

//Update a student
router.put('/:id', function(req, res, next){
    model.Student.findByPk(req.params.id)
    .then(student => {
        if (!student)
            res.status(404)
            .json({
                message: "CANNOT FIND STUDENT"
            })
        

        student.update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            imageUrl: req.body.imageUrl,
            gpa: req.body.gpa,
            campusId: req.body.campusId,
        });

        student.save();

        res.status(200)
        .json({
            message: "STUDENT UPDATED",
            student
        });
    })
    .catch(error => {
        res.status(404)
        .json({
            message: "ERROR",
            error
        });
    })
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;