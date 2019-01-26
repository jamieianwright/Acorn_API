const db = require('../database');
require('./supplier');
require('./project');

var Component = db.Model.extend({
  tableName: 'components',
  supplier: function() {
    return this.belongsTo('Supplier');
  },
  projects: function() {
    return this.belongsToMany('Project', 'projects_components');
  }
});

module.exports = db.model('Component', Component);