const db = require('../database');

const User = db.Model.extend({
  tableName: 'users',
  hasSecurePassword: 'password_digest'
});

module.exports = User;