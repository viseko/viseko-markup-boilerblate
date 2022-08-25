const PugPlugin = require("pug-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = () => {
  const plugins = [
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: "styles/[name].[contenthash:8].css",
      },
    }),
    new ESLintPlugin({
      failOnError: false,
      quiet: true,
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
