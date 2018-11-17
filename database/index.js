const knex = require('knex')(require('../knexfile'));
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');
const db = bookshelf(knex);
db.plugin('registry');
db.plugin(securePassword);

module.exports = db;