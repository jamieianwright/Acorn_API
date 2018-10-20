
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('supplier').del()
    .then(function () {
      // Inserts seed entries
      return knex('supplier').insert([
        {id: 1, name: 'supplier 1', phone_number: '555-1234', website: 'supplier1.com', email:'sales@supplier1.com'},
        {id: 2, name: 'supplier 2', phone_number: '555-1234', website: 'supplier2.com', email:'sales@supplier2.com'},
        {id: 3, name: 'supplier 3', phone_number: '555-1234', website: 'supplier3.com', email:'sales@supplier3.com'}
      ]);
    });
};
