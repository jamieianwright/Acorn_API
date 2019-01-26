
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_components').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_components').insert([
        {project_id: 1, component_id: 1},
        {project_id: 1, component_id: 3},
        {project_id: 1, component_id: 4},
        {project_id: 1, component_id: 5},
        {project_id: 1, component_id: 7},
        {project_id: 1, component_id: 12},
        {project_id: 1, component_id: 13},
        {project_id: 2, component_id: 1},
        {project_id: 2, component_id: 2},
        {project_id: 2, component_id: 4},
        {project_id: 2, component_id: 5},
        {project_id: 2, component_id: 6},
        {project_id: 2, component_id: 12},
        {project_id: 2, component_id: 14},
        {project_id: 3, component_id: 2},
        {project_id: 3, component_id: 3},
        {project_id: 3, component_id: 4},
        {project_id: 3, component_id: 5},
        {project_id: 3, component_id: 8},
        {project_id: 3, component_id: 11},
        {project_id: 3, component_id: 13},
        {project_id: 4, component_id: 2},
        {project_id: 4, component_id: 3},
        {project_id: 4, component_id: 4},
        {project_id: 4, component_id: 6},
        {project_id: 4, component_id: 9},
        {project_id: 4, component_id: 12},
        {project_id: 4, component_id: 13},
      ]);
    });
};
