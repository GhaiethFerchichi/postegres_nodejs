const Sequelize = require("sequelize");

const config = {
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

const connectToPostgres = async () => {
  const sequelize = new Sequelize(config.development);

  try {
    await sequelize.authenticate();
    console.info("Connection has been established successfully");
    return sequelize;
  } catch (error) {
    console.error("unable to connect to the database ", error);
  }
  return null;
};

module.exports = connectToPostgres;
