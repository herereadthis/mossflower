
// The "wrapper" function
module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Do grunt-related things in here
    // Project configuration.
    grunt.initConfig({
        // imports the JSON metadata stored in package.json
        pkg: grunt.file.readJSON('package.json'),
        // compiles LESS file to minified CSS
        less: {
            minifiedLess: {
                options: {
                    cleancss: true
                },
                files: {
                    "./dist/css/mossflower.less-minified.css": "./src/less/mossflower.less"
                }
            },
            uncompressedLess: {
                options: {
                    cleancss: false
                },
                files: {
                    "./dist/css/mossflower.less.css": "./src/less/mossflower.less"
                }
            }
        },
        sass: {
            minifiedSass: {
                options: {
                    style: 'compressed',
                    precision: 4
                },
                files: {
                    "./dist/css/mossflower.sass-minified.css": "./src/sass/mossflower.scss"
                }
            },
            uncompressedSass: {
                options: {
                    style: 'expanded',
                    precision: 4
                },
                files: {
                    "./dist/css/mossflower.sass.css": "./src/sass/mossflower.scss"
                }
            }
        },
        watch: {
            // runs less task when any less files change
            less: {
                files: ["./src/less/*", "./src/demo/less/*"],
                tasks: ["less"]
            },
            sass: {
                files: ["./src/sass/*", "./src/demo/sass/*"],
                tasks: ['sass']  
            }
        }
    });

    grunt.registerTask('default', [
        'less',
        'sass'
    ]);
    grunt.registerTask('server', [
        'watch'
    ]);
    grunt.registerTask('test', [
        'less'
    ]);
};