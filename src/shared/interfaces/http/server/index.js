const express = require("express");

const server = ({ router, config, documentation }) => {
  let app = express();
  const port = config.PORT;

  app.disable("x-powered-by");
  app.use(express.json());
  app.use(express.text());
  app.use(express.urlencoded({ extended: true }));
  app = documentation(app, express.static);
  app.use(router);

  const start = () =>
    new Promise((resolve) => {
      app.listen(port, () => {
        console.log(`App listening on port ${port}`);
      });

      resolve();
    });

  return {
    app,
    start,
  };
};

module.exports = server;
