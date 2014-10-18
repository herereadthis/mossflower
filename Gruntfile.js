
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
                    "./dist/css/main.less-minified.css": "./src/less/main.less"
                }
            },
            uncompressedLess: {
                options: {
                    cleancss: false
                },
                files: {
                    "./dist/css/main.less.css": "./src/less/main.less"
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
                    "./dist/css/main.sass-minified.css": "./src/sass/main.scss"
                }
            },
            uncompressedSass: {
                options: {
                    style: 'expanded',
                    precision: 4
                },
                files: {
                    "./dist/css/main.sass.css": "./src/sass/main.scss"
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