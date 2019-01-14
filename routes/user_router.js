var express = require("express");
var router = express.Router({mergeParams: true});
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('../config/passport')

router.post("/register", (req, res) => {
    var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if(!req.body.email || !req.body.password){
        return res.status(401).send('Please enter your email and password.');
    } else if(!pattern.test(req.body.password)){
        return res.status(401).send('Password must be longer than 8 characters, have at least one lower case letter, one upper case letter and a number.');
    } else {
        const user = new User ({
            email: req.body.email,
            password: req.body.password
        })
        user.save()
        .then((saved) => res.status(200).send(`New user registered with email of ${saved.attributes.email}`))
    }
});

router.post('/login', (req, res) => {
    User
    .forge({ email: req.body.email })
    .fetch()
    .then(function (user) {
      return user.authenticate(req.body.password).then((user) => {
          const payload = {id : user.id}
          const token = jwt.sign(payload, process.env.TITAN_API_SECRET_KEY);
          res.json(token);
      }).catch(err => {
        return res.status(401).send(err);
      })
    })
})

router.get('/getUser', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send(req.user);
});

module.exports = router;