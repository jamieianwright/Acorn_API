const express = require("express");
const router = express.Router({mergeParams: true});
const Component = require('../models/component');
const passport = require('../config/passport')

router.get("/", 
// passport.authenticate('jwt', { session: false })
(req, res) => {
    Component.where('is_deleted', 0)
    .fetchAll({
        withRelated: [{'supplier': function(qb) {
            qb.column('id','name', 'website', 'email');
        }}],
        columns: ['name', 'price', 'description', 'lead_time', 'min_order_quantity', 'supplier_id']
    })
    .then(components => res.json(components));
});

router.get("/:id", (req, res) => {

})

router.post("/", (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;