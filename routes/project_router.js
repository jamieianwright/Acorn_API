const express = require("express");
const router = express.Router({mergeParams: true});
const Project = require('../models/project');

router.get('/', (req, res) => {
    Project
        .where('projects.is_deleted', 0)
        .query(function (qb) {
            qb.where(`projects.name`, 'LIKE', `%${req.query.search || ''}%`).orderBy('name', req.query.order || 'asc')
        })
        .fetchPage({
            page: req.query.page || 1,
            pageSize: (req.query.pageSize || 10),
            columns: [
                'projects.id',
                'projects.name',
                'description',
                'is_active'
            ]
        })
        .then(projects => {
            const responseObject = {
                'projects': projects,
                'pagination': projects.pagination
            }
            res
                .status(200)
                .json(responseObject)
        })
        .catch((err) => res.status(500).send(err))
})

router.get('/:id', (req, res) => {
    Project
        .forge({id: req.params.id})
        .fetch({
            withRelated: [
                {
                    'components': function (qb) {
                        qb.column('id','name', 'price', 'description', 'lead_time', 'min_order_quantity', 'supplier_id');
                    }
                }
            ],
            columns: [
                'id',
                'name',
                'description',
                'is_active'
            ]
        })
        .then(projects => {
            res
                .status(200)
                .json(projects)
        })
        .catch((err) => res.status(500).send(err))
})

module.exports = router;