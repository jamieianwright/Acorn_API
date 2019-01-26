
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('description').notNullable();
        table.unique('name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
