const express = require("express");
const router = express.Router({mergeParams: true});
const Project = require('../models/project');

router.get('/', (req, res) => {
    Project
        .where('projects.is_deleted', 0)
        .query(function (qb) {
            qb.where(`${req.query.searchBy || 'projects.name'}`, 'LIKE', `%${req.query.search || ''}%`).orderBy(req.query.orderBy || 'name', req.query.order || 'asc')
        })
        .fetchPage({
            page: req.query.page || 1,
            pageSize: (req.query.pageSize || 10),
            columns: [
                'projects.id',
                'projects.name',
                'description',
                'is_active',
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
    let componentsPage = parseInt(req.query.componentsPage) || 1;
    let componentsPageSize = parseInt(req.query.componentsPageSize) || 10;
    let componentsOffset = componentsPageSize * (componentsPage - 1)

    Project
        .forge({id: req.params.id})
        .fetch({
            withRelated: [
                {
                    'components': function (qb) {
                        qb.column('id','name', 'price', 'description', 'lead_time', 'min_order_quantity', 'supplier_id')
                        .orderBy(req.query.componentOrderBy || 'name', req.query.componentOrder || 'asc')
                        .limit(componentsPageSize)
                        .offset(componentsOffset);
                    },
                    'componentsPagination': function (qb) {
                        qb.count('name as rowCount')
                    }
                }
            ],
            columns: [
                'id',
                'name',
                'description',
                'is_active',
            ]
        })
        .then(projects => {

            projects = projects.toJSON();

            if(projects.components.length > 0){
                projects.components.forEach((component, i) => {
                    delete component._pivot_project_id;
                    delete component._pivot_component_id;
                    component.quantity = component._pivot_quantity
                    delete component._pivot_quantity;
                })
    
                projects.componentsPagination = projects.componentsPagination[0];
                projects.componentsPagination.page= componentsPage;
                projects.componentsPagination.pageSize = componentsPageSize;
                projects.componentsPagination.pageCount = Math.ceil(projects.componentsPagination.rowCount / projects.componentsPagination.pageSize);
                delete projects.componentsPagination._pivot_project_id
                delete projects.componentsPagination._pivot_component_id
            }   

            res
                .status(200)
                .json(projects)
        })
        .catch((err) => res.status(500).send(err))
})

router.post("/", (req, res) => {
    if (!req.body.name || !req.body.description) {
        res
            .status(400)
            .send('Required fields missing.');
    } else {
        Project
            .forge(req.body)
            .save()
            .then(saved => res.json(saved))
            .catch((err) => res.status(500).send(err))
    }
})

router.put('/:id', (req, res) => {
    if (!req.body.name || !req.body.description || !req.body.is_active) {
        res
            .status(400)
            .send('Required fields missing')
    } else {
        Project
            .where('id', req.params.id)
            .save(req.body, {patch: true})
            .then(saved => res.json(saved))
            .catch((err) => res.status(500).send(err))
    }
})

module.exports = router;