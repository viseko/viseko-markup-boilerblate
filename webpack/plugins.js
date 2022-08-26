import ESLintPlugin from "eslint-webpack-plugin";
import PugPlugin from "pug-plugin";
import StyleLintPlugin from "stylelint-webpack-plugin";

export default () => {
  const plugins = [
    // Pug
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: "styles/[name].[contenthash:8].css",
      },
    }),

    // ESLint
    new ESLintPlugin({
      failOnError: false,
      quiet: true,
    }),

    // Stylelint
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
