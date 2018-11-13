
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('suppliers', function(t) {
        t.unique('name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('suppliers', function(t) {
        t.dropUnique('name');
    })
};
