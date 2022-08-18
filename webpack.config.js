// Basic imports
const path = require("path");
const setPlugins = require("./webpack/plugins");
const setLoaders = require("./webpack/loaders");

// Config constants
const mode = process.env.NODE_ENV || "development";
const isDev = (mode === "development");
const isProd = (mode === "production");

// Project paths
const paths = {
  srcFolder: path.resolve(__dirname, "src"),
  buildFolder: path.resolve(__dirname, "dist"),
  src: {
    js: path.resolve(__dirname, "src/js/index.js"),
    pages: {
      index: path.resolve(__dirname, "src/pug/index.pug")
    }
  },
  build: {
    js: path.resolve(__dirname, "dist/js")
  }
};

// Environment data for modules
const env = {
  mode,
  isDev,
  isProd,
  paths
};

// Helper functions
const setOutputFilename = () => {
  return isDev ? "[name].js" : "[name].[contenthash].js";
};

// Webpack configs
module.exports = {
  entry: paths.src.pages,
  output: {
    path: paths.buildFolder,
    publicPath: "/",
    filename: setOutputFilename(),
    clean: true
  },
  plugins: setPlugins(env),
  module: {
    rules: setLoaders(env)
  },
  devServer: {
    port: 8080,
    hot: true,
    static: {
      directory: paths.srcFolder
    }
  },
  stats: "errors-warnings"
};
