const db = require('../database');
require('./component');

var Project = db
    .Model
    .extend({
        tableName: 'projects',
        components: function () {
            return this
                .belongsToMany('Component', 'projects_components')
                .withPivot('quantity');
        }
    });

module.exports = db.model('Project', Project);