
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects_components', function (table) {
        table.integer('project_id').unsigned().references('projects.id');
        table.integer('component_id').unsigned().references('components.id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects_components')
};
