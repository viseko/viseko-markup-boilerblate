const PugPlugin = require("pug-plugin");

module.exports = () => {
  const loaders = [
    {
      test: /\.pug$/,
      loader: PugPlugin.loader,
    },
    {
      test: /\.(css|sass|scss)$/,
      use: ["css-loader", "sass-loader"],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },
  ];

  return loaders;
};
