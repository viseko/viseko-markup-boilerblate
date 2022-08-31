import gulp from "gulp";

// Configs
import pathes from "./config/gulp/config/pathes.js";

// Tasks
import images from "./config/gulp/tasks/images.js";
import icons from "./config/gulp/tasks/icons.js";
import fonts from "./config/gulp/tasks/fonts.js";

// Common variables
global.app = {
  gulp,
  pathes,
};

// Main task
const prepareSources = gulp.parallel(images, icons, fonts);
export default prepareSources;

// Atomic tasks
export { icons, images, fonts };
