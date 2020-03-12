const Battery = require('../models/battery.model.js');
pry = require('pryjs')
const params = require('params');

module.exports = {
    create : (req,res,next)=> {
        if(!req.body.name) {
            return res.status(400).send({
                message: "Name can not be empty"
            });
        }
        var battery = new Battery(req.body);
        battery.save()
        .then(data => {
            res.send(data);
        });
    }
}
