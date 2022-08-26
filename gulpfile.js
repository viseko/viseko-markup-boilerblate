import gulp from "gulp";
import images from "./gulp/tasks/images.js";
import pathes from "./gulp/config/path.js";

// Tasks import
global.app = {
  gulp,
  pathes,
};

const prepareImages = gulp.parallel(images);

export default prepareImages;
