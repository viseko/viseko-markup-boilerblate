import gulp from "gulp";

// Configs
import pathes from "./config/gulp/config/path.js";

// Tasks
import images from "./config/gulp/tasks/images.js";
import icons from "./config/gulp/tasks/icons.js";
import fonts from "./config/gulp/tasks/fonts.js";

// Tasks import
global.app = {
  gulp,
  pathes,
};

const prepareSources = gulp.parallel(images, icons, fonts);

export { icons, images, fonts };

export default prepareSources;
