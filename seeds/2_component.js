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
        {
          id: 5,
          name: 'component5',
          price: 5.99,
          description: 'this is a description',
          lead_time: 5,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 6,
          name: 'component6',
          price: 6.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 7,
          name: 'component7',
          price: 7.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 8,
          name: 'component8',
          price: 8.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 9,
          name: 'component9',
          price: 9.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 10,
          name: 'component10',
          price: 10.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 11,
          name: 'component11',
          price: 0.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 12,
          name: 'component12',
          price: 0.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 13,
          name: 'component13',
          price: 0.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 14,
          name: 'component14',
          price: 0.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
        {
          id: 15,
          name: 'component15',
          price: 0.99,
          description: 'this is a tiny description',
          lead_time: 1,
          min_order_quantity: 50,
          supplier_id: 1
        },
      ]);
    });
};