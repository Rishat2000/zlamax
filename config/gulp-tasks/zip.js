import { deleteAsync } from "del";
export const zip = () => {
	deleteAsync(`./${app.rootFolder}.zip`);
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(app.lp.plumber(
			app.lp.notify.onError({
				title: "ZIP",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.lp.zip(`${app.rootFolder}.zip`))
		.pipe(app.gulp.dest('./'));
}
