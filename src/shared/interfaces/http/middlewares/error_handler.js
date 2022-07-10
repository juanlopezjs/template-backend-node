const Status = require("http-status");

module.exports = (err, res, logger, Fail) => {
  logger.error("ErrorHandler", err);
  return res.status(err.status || Status.INTERNAL_SERVER_ERROR).json(Fail(err));
};
