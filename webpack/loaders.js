import PugPlugin from "pug-plugin";

export default () => {
  const loaders = [
    // PUG-Files
    {
      test: /\.pug$/,
      loader: PugPlugin.loader,
    },
    {
      test: /\.(css|sass|scss)$/,
      use: ["css-loader", "sass-loader"],
    },

    // JavaScript
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },

    // Images
    {
      test: /\.(png|jpg|svg|gif|webp)$/,
      type: "asset/resource",
      generator: {
        filename: "[name][ext]",
        outputPath: (pathData) =>
          pathData.filename.split("/").slice(1, -1).join("/"), // <-- "img/<subfolders>"
      },
    },
  ];

  return loaders;
};
