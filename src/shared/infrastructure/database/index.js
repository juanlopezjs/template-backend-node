const sequelize = require("./sequelize");

module.exports = ({ logger, config }) => {
  if (!config.DB) {
    /* eslint-disable no-console */
    logger.error("Database config file log not found, disabling database.");
    /* eslint-enable no-console */
    return false;
  }

  const database = sequelize(config.DB);

  return {
    transaction: async () => await database.sequelize.transaction(),
    close: async () => await database.sequelize.close(),
    ...database,
  };
};
