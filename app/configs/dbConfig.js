const Sequelize = require("sequelize");

const dbConfig = {
  development: {
    port: "5432",
    username: "postgres",
    password: "040195",
    database: "bazarat",
    host: "localhost",
    dialect: "postgres",
    logging: (msg) => logger.debug(msg),
    logging: console.log,
  },
  production: {
    // Configuration for production environment
  },
};

const sequelize = new Sequelize(dbConfig.development);

module.exports = sequelize;
