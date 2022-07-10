const path = require("path");
const YAML = require("yamljs");
const OpenApiValidator = require("express-openapi-validator");
const swaggerUi = require("swagger-ui-express");
const { glob } = require("glob");

module.exports = (app, renderStatic) => {
  const options = {
    explorer: true,
    swaggerOptions: {
      urls: [],
    },
  };
  const apiSpec = glob.sync(
    "src/modules/*/infrastructure/*_documentation.yaml"
  );

  apiSpec.forEach((item) => {
    const swaggerDocument = YAML.load(item);
    const name = path.basename(item).replace(".yaml", "");

    app.use(`/spec/${name}`, renderStatic(item));
    const jsonRoute = `/spec/${name}/json`;
    app.get(jsonRoute, (req, res) => res.json(swaggerDocument));
    options.swaggerOptions.urls.push({ url: jsonRoute, name });

    app.use(
      OpenApiValidator.middleware({
        apiSpec: item,
        validateResponses: false, // <-- to validate responses
      })
    );
  });

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(null, options));

  return app;
};
