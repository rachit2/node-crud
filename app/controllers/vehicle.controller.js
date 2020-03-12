const Vehicle = require('../models/vehicle.model.js');
pry = require('pryjs')
const params = require('params');

module.exports = {
    create : (req,res,next)=> {
        if(!req.body.name) {
            return res.status(400).send({
                message: "Name can not be empty"
            });
        }
        var vehicle = new Vehicle(req.body);
        vehicle.save()
        .then(data => {
            res.send(data);
        });
    }
}