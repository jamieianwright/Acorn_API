const express = require("express");
const router = express.Router({mergeParams: true});
const Project = require('../models/project');

router.get('/', (req, res) => {
    Project
        .where('projects.is_deleted', 0)
        .fetchPage({
            page: req.query.page || 1,
            pageSize: (req.query.pageSize || 10),
            columns: [
                'projects.id',
                'projects.name',
                'description'
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
})

module.exports = router;