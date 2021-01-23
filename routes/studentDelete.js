const express = require('express');
const router = express.Router();

//Get model
const model = require('../database/models');

//Get a student
router.get('/:id', function(req, res, next){ 
    model.Student.findByPk(req.params.id)
    .then(student => {
        if (!student) {
            res.status(404)
            .json({
                message: "CANNOT FIND STUDENT"
            })
        } else {

        student.destroy();

        res.status(200)
        .json({
            message: "STUDENT IS DELETED"
        });
    }
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