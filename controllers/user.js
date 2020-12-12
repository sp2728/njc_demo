var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../models');


exports.addUser = (req, res, next) => {

    console.log(req.body);

    try {
        models.User.create({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email})
        .then((result)=>{
            if (res) {
                res.json({ success: true, status: 'Registration Successful!' });
              }
        })
        .catch((err) => {
            res.json({success:false, status:err['errors'][0]['message']});
          })
    }
    catch (e) {
        throw e;
    }
};

exports.getUsers = (req, res, next) => {
    try {
        models.User.findAll()
            .then((users) => {
                if (users) {
                    res.statusCode = 200;
                    res.json({ success: true, status: 'Users Retrieved Successfully!', users: users });
                }
                else {
                    res.statusCode = 401;
                    res.json({ success: false, status: 'No Users', user: null });
                }
            })
            .catch((err) => {
                res.json(err);
            })
    }
    catch (e) {
        throw e;
    }
}