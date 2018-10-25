var express = require("express");
var router = express.Router({mergeParams: true});
const knex = require('knex')(require('../knexfile')); 

router.get("/", (req, res) => {
    knex('supplier').where('is_deleted', 0).then(suppliers => {
        res.json(suppliers)
    })
    .catch((err) =>
        res.status(500).send(err)
    )
});

router.get("/:id", (req, res) => {
    knex('supplier').where('id', req.params.id).then(suppliers => {
        res.json(suppliers)
    })
    .catch((err) =>
        res.status(500).send(err)
    )
})

router.post("/", (req, res) => {
    if(!req.body.name || !req.body.phone_number || !req.body.website || !req.body.email){
        res.status(400).send('Required fields missing')
    } else {
        knex('supplier').insert(req.body).then( result => {
            res.json(result)
        })
        .catch((err) =>
            res.status(400).send(err)
        ) 
    }
    
})

router.put('/:id', (req, res) => {
    if(!req.body.name || !req.body.phone_number || !req.body.website || !req.body.email){
        res.status(400).send('Required fields missing')
    } else {
        knex('supplier').where('id', req.params.id).update(req.body).then( result => {
            res.json(result)
        })
        .catch((err) =>
            res.status(500).send(err)
        )
    }
})

router.delete('/:id', (req, res) => {
    knex('supplier').where('id', req.params.id).update('is_deleted', 1).then( result => {
        res.json(result)
    })
    .catch((err) =>
        res.status(500).send(err)
    )
})

module.exports = router;