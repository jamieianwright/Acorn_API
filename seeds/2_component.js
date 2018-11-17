exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('components').del()
    .then(function () {
      // Inserts seed entries
      return knex('components').insert([{
          id: 1,
          name: 'component1',
          price: 99.99,
          description: 'this is a description',
          lead_time: 5,
          min_order_quantity: 500,
          supplier_id: 1
        },
        {
          id: 2,
          name: 'component2',
          price: 19.99,
          description: 'this is a description another',
          lead_time: 7,
          min_order_quantity: 200,
          supplier_id: 2
        },
        {
          id: 3,
          name: 'component3',
          price: 27.99,
          description: 'this is yet another description',
          lead_time: 2,
          min_order_quantity: 100,
          supplier_id: 1
        },
        {
          id: 4,
          name: 'component4',
          price: 0.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
      ]);
    });
};