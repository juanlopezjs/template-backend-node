const { createLogger, format, transports } = require("winston");

module.exports = ({ config }) => {
  const enumerateErrorFormat = format((info) => {
    const log = info;
    if (log.level === "error") {
      log.message = `${info.message} [stack]: ${info.stack}`;
    }
    return log;
  });

  const logger = createLogger({
    defaultMeta: {
      service: config.services.name,
    },
    transports: [
      new transports.Console({
        level: "debug",
        format: format.combine(
          enumerateErrorFormat(),
          format.colorize(),
          format.splat(),
          format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
          }),
          format.printf(
            (info) =>
              `${info.timestamp} service: ${info.service} [${info.level}]: ${
                info.message
              } ${info.splat !== undefined ? `${info.splat}` : " "}`
          )
        ),
      }),
    ],
  });

  //   if (config.logging && config.logging.http) {
  //     const { Seq } = require("winston-seq");
  //     logger.add(new Seq(config.logging.http));
  //   }

  return logger;
};
