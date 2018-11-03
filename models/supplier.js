const db = require('../database');

const Supplier = db.Model.extend({
    tableName: 'supplier'
});

module.exports = Supplier;