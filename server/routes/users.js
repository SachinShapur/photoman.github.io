var express = require('express');
var router = express.Router();
var User = require('../model/user'); // get model


/* GET users listing. */
router.post('/verification', function (req, res, next) {
  User.findOne({
    email: req.body.email
  }).exec(function (err, user) {
    if (err) { return next(err); }
    if (!user) {
      res.json({message: 'Please verify your email and password or sign-up first.' ,
      status: 403
    });
    } else if (user) {
      if (user.password === req.body.password) {
        res.json({
          message: 'Successfully logged-in!!',
          user: user,
          staus: 200
        });
      } else {
        res.json({
          message: 'Please provide correct password',
          user: user,
          status: 300
        });
      }
    }
  });

});

module.exports = router;