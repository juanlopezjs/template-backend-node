module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "node_template",
      script: "./src/index.js",
      error_file: "err.log",
      out_file: "out.log",
      watch: true,
      ignore_watch: [
        "node_modules",
        "client/img",
        ".git",
        "*.log",
        "*.pdf",
        "*.png",
        "*.jpg",
        "*.jpeg",
      ],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: "development",
      },
      env_testing: {
        NODE_ENV: "testing",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
