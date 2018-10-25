require('dotenv').config();

module.exports = {
    client: 'mysql',
    connection: {
      host: process.env.TITAN_API_HOST,
      user: process.env.TITAN_API_USERNAME,
      password: process.env.TITAN_API_PASSWORD,
      database: process.env.TITAN_API_DATABASE,
    }
}
