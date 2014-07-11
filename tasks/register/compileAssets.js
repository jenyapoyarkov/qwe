module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'stylus:dev',
		'copy:dev',
	]);
};
