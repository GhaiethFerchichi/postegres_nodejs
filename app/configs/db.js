const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'locahost',     // Replace with your PostgreSQL host
  port: '54',     // Replace with your PostgreSQL port
  username: 'postgres', // Replace with your PostgreSQL username
  password: '040195', // Replace with your PostgreSQL password
  database: 'bazarat',   // Replace with your PostgreSQL database name
});

module.exports = sequelize;