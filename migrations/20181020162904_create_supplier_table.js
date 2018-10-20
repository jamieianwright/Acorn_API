
exports.up = function(knex, Promise) {
    return knex.schema.createTable('supplier', function (table) {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('phone_number').notNullable()
        table.string('website').notNullable()
        table.string('email').notNullable()
        table.boolean('is_deleted').defaultTo(false).notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('supplier')
};
