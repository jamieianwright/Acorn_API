
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('email').notNullable();
        table.string('password_digest').notNullable();
        table.unique('email');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
