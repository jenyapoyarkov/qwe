/**
 * Precompiles jade templates.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */

module.exports = function(grunt) {

	grunt.config.set('jade', {
		dev: {
      files: [{
        src: 'views/homepage.jade',
        dest: 'assets/index.html'
      }, {
        expand: true,
        src: ['views/**/*.jade', '!views/homepage.jade', '!views/layout.jade'],
        dest: 'assets/',
        ext: '.html'
      }]
    },
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
};
