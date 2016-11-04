module.exports = function (grunt) {

    //=============== Project configuration.
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),

        connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3001,
					open: true,
					livereload: true
				}
			}
		},
		
        watch: {
			// reload the browser when changes are made
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'index.html'
				]
			}
		}

    });



    //============ Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

    //============== Default task(s).
    grunt.registerTask('default', [
        'connect',
        'watch'
    ]);

};