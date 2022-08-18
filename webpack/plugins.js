const PugPlugin = require("pug-plugin");

module.exports = env => {
  const plugins = [
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: "styles/[name].[contenthash:8].css",
      },
    })
  ];

  return plugins;
};