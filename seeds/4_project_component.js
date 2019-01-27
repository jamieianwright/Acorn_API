
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_components').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_components').insert([
        {project_id: 1, component_id: 1, quantity: 1},
        {project_id: 1, component_id: 3, quantity: 1},
        {project_id: 1, component_id: 4, quantity: 1},
        {project_id: 1, component_id: 5, quantity: 1},
        {project_id: 1, component_id: 7, quantity: 1},
        {project_id: 1, component_id: 12, quantity: 1},
        {project_id: 1, component_id: 13, quantity: 1},
        {project_id: 2, component_id: 1, quantity: 1},
        {project_id: 2, component_id: 2, quantity: 1},
        {project_id: 2, component_id: 4, quantity: 1},
        {project_id: 2, component_id: 5, quantity: 1},
        {project_id: 2, component_id: 6, quantity: 1},
        {project_id: 2, component_id: 12, quantity: 1},
        {project_id: 2, component_id: 14, quantity: 1},
        {project_id: 3, component_id: 2, quantity: 1},
        {project_id: 3, component_id: 3, quantity: 1},
        {project_id: 3, component_id: 4, quantity: 1},
        {project_id: 3, component_id: 5, quantity: 1},
        {project_id: 3, component_id: 8, quantity: 1},
        {project_id: 3, component_id: 11, quantity: 1},
        {project_id: 3, component_id: 13, quantity: 1},
        {project_id: 4, component_id: 2, quantity: 1},
        {project_id: 4, component_id: 3, quantity: 1},
        {project_id: 4, component_id: 4, quantity: 1},
        {project_id: 4, component_id: 6, quantity: 1},
        {project_id: 4, component_id: 9, quantity: 1},
        {project_id: 4, component_id: 12, quantity: 1},
        {project_id: 4, component_id: 13, quantity: 1},
      ]);
    });
};
