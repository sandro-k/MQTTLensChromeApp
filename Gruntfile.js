module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'js/app.js', // input
                dest: 'js/build/app.min.js' // output
            }
        },
        // the SASS task
        sass: {
            dist: {                            // Target
                files: [{
                    expand: true,
                    src: ['styles/*.scss'],
                    dest: 'build',
                    ext: '.css'
                }]
            }
        },
        // the vulcanize task
        vulcanize: {
            default: {
                options: {
                    csp: true,
                    strip: true
                },
                files: {
                    // Target-specific file lists and/or options go here.
                    'build/build.html': 'index.html'
                }
            }
        },


        watch: {
            // watch for SCSS files and compile to css
            sass: {
                files: ['styles/*.scss'],
                tasks: ['sass']
            },
            vulcanize: {
                files: ['index.html'],
                tasks: ['vulcanize']
            }
        }
//        // reload page after the scss file had been compiled
//        livereload: {
//            // Here we watch the files the sass task will compile to
//            // These files are sent to the live reload server after sass compiles to them
//            options: { livereload: true },
//            files: ['css/build/*', 'js/build/*']
//        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // load sass
    grunt.loadNpmTasks('grunt-contrib-sass');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // vulcanize
    grunt.loadNpmTasks('grunt-vulcanize');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass', 'vulcanize']);



};
