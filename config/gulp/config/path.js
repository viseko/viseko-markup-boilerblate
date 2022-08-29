/* global app */
import path from "path";

const srcFolder = "./src";
const publicFolder = "./public";

const pathes = {
  root: path.resolve(),
  srcFolder,
  publicFolder,

  src: {
    img: `${srcFolder}/img/`,
    icons: `${srcFolder}/icons/`,
  },
  public: {
    img: `${publicFolder}/img/`,
    icons: `${publicFolder}/icons/`,
  },
};

export default pathes;
