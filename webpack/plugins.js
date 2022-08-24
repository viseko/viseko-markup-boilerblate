const PugPlugin = require("pug-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = () => {
  const plugins = [
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: "styles/[name].[contenthash:8].css",
      },
    }),
    new StyleLintPlugin({
      configFile: ".stylelintrc.json",
      context: "src",
      files: "**/*.scss",
      fix: true,
      failOnError: false,
      quiet: true,
    }),
  ];

  return plugins;
};
