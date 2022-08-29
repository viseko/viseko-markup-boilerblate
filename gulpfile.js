import gulp from "gulp";

// Configs
import pathes from "./config/gulp/config/path.js";

// Tasks
import images from "./config/gulp/tasks/images.js";
import icons from "./config/gulp/tasks/icons.js";

// Tasks import
global.app = {
  gulp,
  pathes,
};

const prepareImages = gulp.parallel(images, icons);

export { icons, images };

export default prepareImages;
