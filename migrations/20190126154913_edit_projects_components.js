
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('projects_components', function(table) {
        table.integer('quantity').defaultTo(0).notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('projects_components', function(table) {
        table.dropColumn('quantity');
    })
};
