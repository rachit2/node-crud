const User = require('../models/user.model.js');
pry = require('pryjs')

exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Name can not be empty"
        });
    }

    const user = new User({
        name: req.body.name || "Untitled User"
    });

    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

exports.index = (req, res) => {
    User.find()
    .then(users => {
        res.render('../views/users/index', {users:users})
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.edit = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.render('../views/users/form', {user :user});

    })
};

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Name can not be empty"
        });
    }

    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name || "Untitled User"
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.redirect('/users');
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        // res.send({message: "User deleted successfully!"});
        res.redirect('/users');
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};
