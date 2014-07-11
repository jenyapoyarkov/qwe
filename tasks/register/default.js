module.exports = function (grunt) {
	grunt.registerTask('default', [
    'compileAssets', 
    'linkAssets',
    'compileTemplates',
    'watch'
  ]);
};
