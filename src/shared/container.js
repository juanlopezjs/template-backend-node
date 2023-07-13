const { createContainer, asValue, asFunction, Lifetime } = require("awilix");

const server = require("./interfaces/http/server/index");
const config = require("../config");
const logger = require("./infrastructure/logging/logger");
const response = require("./interfaces/http/helper/response");
const database = require("./infrastructure/database");
const { router } = require("./interfaces/http/server/router");
const documentation = require("./infrastructure/documentation");
const { ImportFiles } = require("./infrastructure/tools/importFiles");
const baseQueriesRepository = require("./domain/baseQueriesRepository");
const baseCommandsRepository = require("./domain/baseCommandsRepository");

const container = createContainer();

container.register({
  config: asValue(config),
  app: asFunction(server).singleton(),
  database: asFunction(database).singleton(),
  router: asFunction(router).singleton(),
  logger: asFunction(logger).singleton(),
  response: asFunction(response).singleton(),
  importFiles: asValue(ImportFiles),
  documentation: asValue(documentation),
  baseQueriesRepository: asValue(baseQueriesRepository),
  baseCommandsRepository: asValue(baseCommandsRepository),
});

container.loadModules([
  [
    "src/modules/*/infrastructure/*Route.js",
    { register: asValue },
  ],
  [
    "src/modules/*/infrastructure/*Controller.js",
    { register: asFunction, lifetime: Lifetime.SINGLETON },
  ],
  [
    "src/modules/*/domain/*Repository.js",
    { register: asFunction, lifetime: Lifetime.SINGLETON },
  ],
  [
    "src/modules/*/application/*Application.js",
    { register: asFunction, lifetime: Lifetime.SINGLETON },
  ],
]);

module.exports = container;
