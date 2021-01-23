const express = require('express');
const router = express.Router();

//Get model
const model = require('../database/models');

//Update a campus
router.put('/:id', function(req, res, next){
    model.Campus.findByPk(req.params.id)
    .then(campus => {
        if (!campus){
            res.status(404)
            .json({
                message: "CANNOT FIND CAMPUS"
            })
        }

        campus.update({
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            address: req.body.address,
            description: req.body.description,
        });

        campus.save();

        res.status(200)
        .json({
            message: "CAMPUS UPDATED",
            campus
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