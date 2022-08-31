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
    fonts: `${srcFolder}/fonts/`,
    styles: `${srcFolder}/styles/`,
  },
  public: {
    img: `${publicFolder}/img/`,
    icons: `${publicFolder}/icons/`,
    fonts: `${publicFolder}/fonts/`,
  },
};

export default pathes;
