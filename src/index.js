const container = require("./shared/container");

const application = container.resolve("app");
const logger = container.resolve("logger");

application.start().catch((error) => {
  logger.error("Application", error);
  process.exit();
});
