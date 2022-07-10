const fs = require("fs");

const path = require("path");
const Sequelize = require("sequelize");

module.exports = (config) => {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

  const db = {
    sequelize,
    Sequelize,
    models: {},
  };

  const dir = path.join(__dirname, "../models");
  fs.readdirSync(dir).forEach((file) => {
    const model = require(path.join(dir, file))(sequelize, Sequelize.DataTypes);
    db.models[model.name] = model;
  });

  Object.keys(db.models).forEach((key) => {
    if ("associate" in db.models[key]) {
      db.models[key].associate(db.models);
    }
  });

  return db;
};
