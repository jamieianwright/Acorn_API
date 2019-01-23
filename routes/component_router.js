const express = require("express");
const router = express.Router({mergeParams: true});
const Component = require('../models/component');
const passport = require('../config/passport')

router.get("/",
// passport.authenticate('jwt', { session: false })
(req, res) => {
    if (req.query.page) {
        Component
            .where('components.is_deleted', 0)
            .query(function (qb) {
                qb.leftJoin('suppliers', 'suppliers.id', 'components.supplier_id').where(`${req.query.searchBy || 'components.name'}`, 'LIKE', `%${req.query.search || ''}%`).orderBy(req.query.orderBy || 'name', req.query.order || 'asc')
            })
            .fetchPage({
                page: req.query.page,
                pageSize: (req.query.pageSize || 10),
                columns: [
                    'components.id',
                    'components.name',
                    'price',
                    'description',
                    'lead_time',
                    'min_order_quantity',
                    'supplier_id'
                ],
                withRelated: [
                    {
                        'supplier': function (qb) {
                            qb.column('id', 'name');
                        }
                    }
                ]
            })
            .then(components => {
                const responseObject = {
                    'components': components,
                    'pagination': components.pagination
                }
                res
                    .status(200)
                    .json(responseObject)
            })
            .catch((err) => res.status(500).send(err))
    } else {
        Component
            .where('is_deleted', 0)
            .fetchAll({
                columns: [
                    'id',
                    'name',
                    'price',
                    'description',
                    'lead_time',
                    'min_order_quantity',
                    'supplier_id'
                ]
            })
            .then(components => res.json(components))
            .catch((err) => res.status(500).send(err))
    }
});

router.get("/:id", (req, res) => {
    Component
        .forge({id: req.params.id})
        .fetch({
            columns: [
                'id',
                'name',
                'price',
                'description',
                'lead_time',
                'min_order_quantity',
                'supplier_id'
            ]
        })
        .then(component => {
            res
                .status(200)
                .json(component)
        })
        .catch((err) => res.status(500).send(err))
})

router.get("/:id/supplier", (req, res) => {
    Component
        .forge({id: req.params.id})
        .fetch({
            withRelated: [
                {
                    'supplier': function (qb) {
                        qb.column('id', 'name', 'website', 'email');
                    }
                }
            ],
            columns: [
                'id',
                'name',
                'price',
                'description',
                'lead_time',
                'min_order_quantity',
                'supplier_id'
            ]
        })
        .then(component => res.json(component))
        .catch((err) => res.status(500).send(err));
})

router.post("/", (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.description || !req.body.lead_time || !req.body.min_order_quantity || !req.body.supplier_id) {
        res
            .status(400)
            .send('Required fields missing.');
    } else {
        Component
            .forge(req.body)
            .save()
            .then(saved => res.json(saved))
            .catch((err) => res.status(500).send(err))
    }
})

router.put('/:id', (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.description || !req.body.lead_time || !req.body.min_order_quantity || !req.body.supplier_id) {
        res
            .status(400)
            .send('Required fields missing')
    } else {
        Component
            .where('id', req.params.id)
            .save(req.body, {patch: true})
            .then(saved => res.json(saved))
            .catch((err) => res.status(500).send(err))
    }
})

router.delete('/:id', (req, res) => {
    Component
        .where('id', req.params.id)
        .save({is_deleted: '1'}, {patch: true})
        .then(saved => res.json(saved))
        .catch((err) => res.status(500).send(err))
})

module.exports = router;