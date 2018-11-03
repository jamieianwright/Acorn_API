const db = require('../database');

const Supplier = db.Model.extend({
    tableName: 'suppliers'
});

module.exports = Supplier;