module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'stylus:dev',
		'sync:dev',
	]);
};
