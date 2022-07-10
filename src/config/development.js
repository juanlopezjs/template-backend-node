const { PGHOST, PGDATABASE, PGUSERNAME } = process.env;

module.exports = {
  env: "development",
  PORT: process.env.SERVICES_PORT || 3000,
  DB: {
    database: PGDATABASE || "templateDB",
    host: PGHOST || "localhost",
    username: PGUSERNAME || "postgres",
    dialect: "postgres",
    logging: false,
  },
};
