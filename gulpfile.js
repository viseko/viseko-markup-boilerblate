import gulp from "gulp";
import images from "./config/gulp/tasks/images.js";
import pathes from "./config/gulp/config/path.js";

// Tasks import
global.app = {
  gulp,
  pathes,
};

const prepareImages = gulp.parallel(images);

export default prepareImages;
