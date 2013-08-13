'use strict';

// var helper = require('./helper');
var path = require('path');

module.exports = function (grunt) {

	grunt.loadTasks('../node_modules/grunt-contrib-clean/tasks');

	// load test tasks
	grunt.loadTasks('./test_tasks');

	grunt.initConfig({
		clean: {
			tests: ['tmp/write/**/*']
		},
		write_xray: {
			one: {
				options: {
					path: 'tmp/dummy/write_xray_one.txt'
				}
			}
		},
		echo: {
			before: {
				options: {
					echo: 'before: ' + path.basename(__filename)
				}
			},
			after: {
				options: {
					echo: 'after: ' + path.basename(__filename)
				}
			}
		}
	});

	grunt.registerTask('default', ['clean', 'echo:before', 'write_xray', 'echo:after']);
};
