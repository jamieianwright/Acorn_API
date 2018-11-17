const db = require('../database');
const Supplier = require('./supplier');

const Component = db.Model.extend({
    tableName: 'components',
    supplier: function() {
        return this.belongsTo(Supplier);
    }
});

module.exports = Component;