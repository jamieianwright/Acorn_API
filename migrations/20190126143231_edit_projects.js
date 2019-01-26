
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('projects', function(table) {
        table.boolean('is_deleted').defaultTo(false).notNullable()
        table.boolean('is_active').defaultTo(false).notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('suppliers', function(table) {
        table.dropColumn('is_deleted');
        table.dropColumn('is_active');
    })
};
