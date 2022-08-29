/* global app */
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

const images = () => {
  // JPG/PNG - оптимизация
  app.gulp
    .src(`${app.pathes.src.img}**/*.{jpg,jpeg,png,gif,webp,svg,ico}`)
    .pipe(
      imagemin({
        progressive: true,
        svgoplugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, // 0-7
      })
    )
    .pipe(app.gulp.dest(app.pathes.public.img));

  // JPG/PNG - преобразование в webp
  return app.gulp
    .src(`${app.pathes.src.img}**/*.{jpg,jpeg,png}`)
    .pipe(
      webp({
        progressive: true,
        svgoplugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, // 0-7
      })
    )
    .pipe(app.gulp.dest(app.pathes.public.img));

  // Очистка папки src/img <--- пока не делаем
};

export default images;
