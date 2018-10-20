var express = require("express");
var router = express.Router({mergeParams: true});
const knex = require('knex')(require('../knexfile')); 

router.get("/", (req, res) => {
    knex('supplier').then(suppliers => {
        res.json(suppliers)
    })
});

router.get("/:id", (req, res) => {
    knex('supplier').where('id', req.params.id).then(suppliers => {
        res.json(suppliers)
    })
})

router.post("/", (req, res) => {
    knex('supplier').insert(req.body).then( result => {
        res.send(result)
    })
})

router.put('/:id', (req, res) => {
    knex('supplier').update(req.body).then( result => {
        res.send(result)
    })
})


module.exports = router;