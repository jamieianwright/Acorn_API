
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('suppliers').del()
    .then(function () {
      // Inserts seed entries
      return knex('suppliers').insert([
        {id: 1, name: 'supplier 1', phone_number: '555-1234', website: 'supplier1.com', email:'sales@supplier1.com'},
        {id: 2, name: 'supplier 2', phone_number: '555-1234', website: 'supplier2.com', email:'sales@supplier2.com'},
        {id: 3, name: 'supplier 3', phone_number: '555-1234', website: 'supplier3.com', email:'sales@supplier3.com'},
        {id: 4, name: 'Jamie', phone_number: '555-1234', website: 'Jamie.com', email:'sales@jamie.com'},
        {id: 5, name: 'Dan', phone_number: '555-1234', website: 'Dan.com', email:'sales@sales1.com'},
        {id: 6, name: 'A', phone_number: '555-1234', website: 'sales1.com', email:'sales@sales2.com'},
        {id: 7, name: 'B', phone_number: '555-1234', website: 'sales2.com', email:'sales@sales3.com'},
        {id: 8, name: 'C', phone_number: '555-1234', website: 'sales3.com', email:'sales@sales4.com'},
        {id: 9, name: 'D', phone_number: '555-1234', website: 'sales4.com', email:'sales@sales5.com'},
        {id: 10, name: 'E', phone_number: '555-1234', website: 'sales5.com', email:'sales@sales6.com'},
        {id: 11, name: 'F', phone_number: '555-1234', website: 'sales6.com', email:'sales@sales7.com'},
        {id: 12, name: 'G', phone_number: '555-1234', website: 'sales7.com', email:'sales@sales8.com'},
        {id: 13, name: 'H', phone_number: '555-1234', website: 'sales8.com', email:'sales@sales9.com'},
        {id: 14, name: 'I', phone_number: '555-1234', website: 'sales9.com', email:'sales@sales10.com'},
        {id: 15, name: 'J', phone_number: '555-1234', website: 'sales10.com', email:'sales@sales11.com'},
        {id: 16, name: 'K', phone_number: '555-1234', website: 'sales11.com', email:'sales@sales12.com'},
        {id: 17, name: 'L', phone_number: '555-1234', website: 'sales12.com', email:'sales@sales13.com'},
        {id: 18, name: 'M', phone_number: '555-1234', website: 'sales13.com', email:'sales@sales14.com'},
        {id: 19, name: 'N', phone_number: '555-1234', website: 'sales14.com', email:'sales@sales15.com'},
        {id: 20, name: 'O', phone_number: '555-1234', website: 'sales15.com', email:'sales@sales16.com'},
        {id: 21, name: 'P', phone_number: '555-1234', website: 'sales16.com', email:'sales@sales17.com'},
      ]);
    });
};
