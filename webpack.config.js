// Basic importsfrom
import path from "path";
import setLoaders from "./config/webpack/loaders.js";
import setPlugins from "./config/webpack/plugins.js";

const __dirname = path.resolve();

// Config constants
const mode = process.env.NODE_ENV || "development";
const isDev = mode === "development";
const isProd = mode === "production";

// Project paths
const paths = {
  srcFolder: path.resolve(__dirname, "src"),
  buildFolder: path.resolve(__dirname, "dist"),
  src: {
    js: path.resolve(__dirname, "src/js/index.js"),
    pages: {
      index: path.resolve(__dirname, "src/pug/index.pug"),
    },
  },
  build: {
    js: path.resolve(__dirname, "dist/js"),
  },
};

// Environment data for modules
const env = {
  mode,
  isDev,
  isProd,
  paths,
};

// Helper functions
const setOutputFilename = () => {
  return isDev ? "[name].js" : "[name].[contenthash].js";
};

// Webpack configs
const webpackConfig = {
  entry: paths.src.pages,
  output: {
    path: paths.buildFolder,
    publicPath: "/",
    filename: setOutputFilename(),
    clean: true,
  },
  resolve: {
    alias: {
      "@img": path.resolve(__dirname, "public/img"),
      "@icons": path.resolve(__dirname, "public/icons/"),
      "@js": path.resolve(__dirname, "src/js"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@fonts": path.resolve(__dirname, "public/fonts"),
    },
  },
  plugins: setPlugins(env),
  module: {
    rules: setLoaders(env),
  },
  devServer: {
    port: 8080,
    hot: true,
    static: {
      directory: paths.srcFolder,
    },
  },
  stats: "errors-warnings",
};

export default webpackConfig;
