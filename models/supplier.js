const db = require('../database');
require('./component');

var Supplier = db.Model.extend({
  tableName: 'suppliers',
  components: function() {
    return this.hasMany('Component');
  }
});

module.exports = db.model('Supplier', Supplier);