
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'project1', description: 'this a description of the project'},
        {id: 2, name: 'project2', description: 'this a description of the project'},
        {id: 3, name: 'project3', description: 'this a description of the project'},
        {id: 4, name: 'project4', description: 'this a description of the project'},
        {id: 5, name: 'project5', description: 'this a description of the project'},
        {id: 6, name: 'project6', description: 'this a description of the project'},
        {id: 7, name: 'project7', description: 'this a description of the project'},
        {id: 8, name: 'project8', description: 'this a description of the project'},
        {id: 9, name: 'project9', description: 'this a description of the project'},
        {id: 10, name: 'project10', description: 'this a description of the project'},
        {id: 11, name: 'project11', description: 'this a description of the project'},
        {id: 12, name: 'project12', description: 'this a description of the project'},
      ]);
    });
};
