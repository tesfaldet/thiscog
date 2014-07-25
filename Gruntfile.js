module.exports = function(grunt) {
	require('time-grunt')(grunt);
	requre('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		bower: {
			install: {
				options: {
					targetDir: 'client/requires',
					layout: 'byComponent'
				}
			}
		},

		clean: {
			build: ['build'],
			dev: {
				src: ['build/app.js', 'build/<%= pkg.name %>.css', 'build/<%= pkg.name %>.js']
			},
			prod: ['dist']
		},

		browserify: {
			vendor: {
				src: ['client/requires/**/*.js'],
				dest: 'build/vendor.js',
				options: {
					shim: {
						jquery: {
							path: 'client/requires/jquery/js/jquery.js',
							exports: '$'
						},
						underscore: {
							path: 'client/requires/underscore/js/underscore.js',
							exports: '_'
						},
						backbone: {
							path: 'client/requires/backbone/js/backbone.js',
                            exports: 'Backbone',
                            depends: {
                                underscore: 'underscore'
                            }
						},
						'backbone.marionette': {
							path: 'client/requires/backbone.marionette/js/backbone.marionette.js',
                            exports: 'Marionette',
                            depends: {
                                jquery: '$',
                                backbone: 'Backbone',
                                underscore: '_'
                            }
						}
					}
				}
			},
			app: {
                files: {
                    'build/app.js': ['client/src/main.js']
                },
                options: {
                    transform: ['hbsfy'],
                    external: ['jquery', 'underscore', 'backbone', 'backbone.marionette']
                }
            },
            test: {
                files: {
                    'build/tests.js': ['client/spec/**/*.test.js']
                },
                options: {
                    transform: ['hbsfy'],
                    external: ['jquery', 'underscore', 'backbone', 'backbone.marionette']
                }
            }
		},

		less: {
            transpile: {
                files: {
                    'build/<%= pkg.name %>.css': [
                        'client/styles/reset.css',
                        'client/requires/*/css/*',
                        'client/styles/less/main.less'
                    ]
                }
            }
        },

        concat: {
            'build/<%= pkg.name %>.js': ['build/vendor.js', 'build/app.js']
        },

        copy: {
            dev: {
                files: [{
                    src: 'build/<%= pkg.name %>.js',
                    dest: 'public/js/<%= pkg.name %>.js'
                }, {
                    src: 'build/<%= pkg.name %>.css',
                    dest: 'public/css/<%= pkg.name %>.css'
                }, {
                    src: 'client/img/*',
                    dest: 'public/img/'
                }]
            },
            prod: {
                files: [{
                    src: ['client/img/*'],
                    dest: 'dist/img/'
                }]
            }
        },

        // CSS minification.
        cssmin: {
            minify: {
                src: ['build/<%= pkg.name %>.css'],
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },

        // Javascript minification.
        uglify: {
            compile: {
                options: {
                    compress: true,
                    verbose: true
                },
                files: [{
                    src: 'build/<%= pkg.name %>.js',
                    dest: 'dist/js/<%= pkg.name %>.js'
                }]
            }
        },

        
	});
};