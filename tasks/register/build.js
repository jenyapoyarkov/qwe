module.exports = function (grunt) {
	grunt.registerTask('build', [
		'compileAssets',
		'linkAssetsBuild',
    'compileTemplates',
		'clean:build',
		'copy:build'
	]);
};
