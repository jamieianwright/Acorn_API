
exports.up = function(knex, Promise) {
    return knex.schema.createTable('components', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('price', 11, 2).notNullable();
        table.text('description').notNullable();
        table.integer('lead_time').notNullable();
        table.integer('min_order_quantity').notNullable();
        table.integer('supplier_id').unsigned().notNullable();
        table.boolean('is_deleted').defaultTo(false).notNullable()
        table.foreign('supplier_id').references('id').inTable('suppliers').onDelete('cascade');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('components')
};
