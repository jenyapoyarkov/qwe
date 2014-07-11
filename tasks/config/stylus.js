/**
 * Compiles Stylus files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Files from `assets/styles/src/` are compiled.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-stylus
 */
module.exports = function(grunt) {

	grunt.config.set('stylus', {
    dev: {
      files: {
        'assets/styles/styles.css': ['assets/styles/src/**/*.styl'],
      }
    }
	});

	grunt.loadNpmTasks('grunt-contrib-stylus');
};
