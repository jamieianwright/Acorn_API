var express = require("express");
var router = express.Router({mergeParams: true});
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('../config/passport')

router.post("/register", (req, res) => {
    if(!req.body.email || !req.body.password){
        return res.sendStatus(401).send('Please enter your email and password.');
    } else {
        const user = new User ({
            email: req.body.email,
            password: req.body.password
        })
        user.save()
        .then((saved) => res.json(saved))
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
          res.send(token);
      }).catch(err => {
        return res.status(401).send({ err });
      })
    })
    .then((result) => res.json(result))
})

router.get('/getUser', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send(req.user);
});

module.exports = router;