const db = require('../database');
const Component = require('./component')

const Supplier = db.Model.extend({
    tableName: 'suppliers',
    components: function() {
        return this.hasMany(Component);
    }
});

module.exports = Supplier;