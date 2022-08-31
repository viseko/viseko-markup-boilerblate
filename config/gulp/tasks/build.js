/* global app */

// The crutch for moving some files into the build folder :p

import fs from "fs";

const build = () => {
  const googleIcon = `${app.pathes.publicFolder}/google-touch-icon.png`;

  // Move google-touch-icon if it exists
  if (fs.existsSync(googleIcon)) {
    app.gulp.src(googleIcon).pipe(app.gulp.dest(app.pathes.distFolder));
  }

  // And move manifest.json
  return app.gulp
    .src(app.pathes.public.manifest)
    .pipe(app.gulp.dest(app.pathes.distFolder));
};

export default build;
