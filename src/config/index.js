const { name, version } = require("../../package.json");

const { NODE_ENV } = process.env;

const services = {
  name,
  version,
};

const env = {
  development: require("./development"),
};

const currentEnv = env[NODE_ENV || "development"];

module.exports = {
  services,
  ...currentEnv,
};
