const express = require("express");
const router = express.Router({mergeParams: true});
const Supplier = require('../models/supplier');
const passport = require('../config/passport')

router.get("/",
// passport.authenticate('jwt', { session: false })
(req, res) => {
    if (req.query.pageSize && req.query.page) {
        Supplier
            .where('is_deleted', 0)
            .orderBy(req.query.orderBy || 'name', req.query.order || 'asc')
            .where(`name`, 'LIKE', `%${req.query.search || ''}%`)
            .fetchPage({
                page: req.query.page,
                pageSize: (req.query.pageSize || 10),
                columns: ['id', 'name', 'phone_number', 'website', 'email']
            })
            .then(suppliers => {
                const responseObject = {
                    'suppliers': suppliers,
                    'pagination': suppliers.pagination
                }
                res
                    .status(200)
                    .json(responseObject)
            })
            .catch((err) => res.status(500).send(err))
    } else {
        Supplier
            .where('is_deleted', 0)
            .fetchAll({
                columns: ['id', 'name', 'phone_number', 'website', 'email']
            })
            .then(suppliers => res.json(suppliers))
            .catch((err) => res.status(500).send(err))
    }
});

router.get("/:id", (req, res) => {
    Supplier
        .forge({id: req.params.id})
        .fetch({
            columns: ['id', 'name', 'phone_number', 'website', 'email']
        })
        .then(suppliers => {
            res
                .status(200)
                .json(suppliers)
        })
        .catch((err) => res.status(500).send(err))
})

router.get("/:id/components", (req, res) => {
    Supplier
        .forge({id: req.params.id})
        .fetchAll({
            withRelated: [
                {
                    'components': function (qb) {
                        qb.column('name', 'price', 'description', 'lead_time', 'min_order_quantity', 'supplier_id');
                    }
                }
            ],
            columns: ['id', 'name', 'website', 'email']
        })
        .then(suppliers => res.json(suppliers))
        .catch((err) => res.status(500).send(err))
})

router.post("/", (req, res) => {
    if (!req.body.name || !req.body.phone_number || !req.body.website || !req.body.email) {
        res
            .status(400)
            .send('Required fields missing')
    } else {
        Supplier
            .forge(req.body)
            .save()
            .then(saved => res.json(saved))
            .catch((err) => res.status(500).send(err))
    }
})

router.put('/:id', (req, res) => {
    if (!req.body.name || !req.body.phone_number || !req.body.website || !req.body.email) {
        res
            .status(400)
            .send('Required fields missing')
    } else {
        Supplier
            .where('id', req.params.id)
            .save(req.body, {patch: true})
            .then(saved => res.json(saved))
            .catch((err) => res.status(500).send(err))
    }
})

router.delete('/:id', (req, res) => {
    Supplier
        .where('id', req.params.id)
        .fetch({columns: ['is_deleted']})
        .then(supplier => {
            Supplier
                .where('id', req.params.id)
                .save({is_deleted: '1'}, {patch: true})
                .then(saved => res.json(saved))
                .catch((err) => res.status(500).send(err))
        })
        .catch((err) => res.status(500).send(err))
})

module.exports = router;