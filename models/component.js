const db = require('../database');
require('./supplier');

var Component = db.Model.extend({
  tableName: 'components',
  supplier: function() {
    return this.belongsTo('Supplier');
  }
});

module.exports = db.model('Component', Component);