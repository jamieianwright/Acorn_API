var express = require("express");
var router = express.Router({mergeParams: true});
const knex = require('knex')(require('../knexfile')); 

router.get("/", function(req, res) {
    knex('supplier').then(suppliers => {
        res.json(suppliers)
    })
});

module.exports = router;