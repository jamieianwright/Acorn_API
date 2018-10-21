var express = require("express");
var router = express.Router({mergeParams: true});
const knex = require('knex')(require('../knexfile')); 

router.get("/", (req, res) => {
    knex('supplier').where('is_deleted', 0).then(suppliers => {
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
        res.json(result)
    })
})

router.put('/:id', (req, res) => {
    knex('supplier').where('id', req.params.id).update(req.body).then( result => {
        res.json(result)
    })
})

router.delete('/:id', (req, res) => {
    knex('supplier').where('id', req.params.id).update('is_deleted', 1).then( result => {
        res.json(result)
    })
})

module.exports = router;