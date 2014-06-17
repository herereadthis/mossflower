
// The "wrapper" function
module.exports = function(grunt) {
    // Do grunt-related things in here
    // Project configuration.
    grunt.initConfig({
        // imports the JSON metadata stored in package.json
        pkg: grunt.file.readJSON('package.json'),
        // compiles LESS file to minified CSS
        less: {
            minifiedLess: {
                options: {
                    paths: ["./src/less", "./src/demo/less"],
                    cleancss: true
                },
                files: {
                    "./src/css/main.less-minified.css": "./src/less/main.less"
                }
            },
            uncompressedLess: {
                options: {
                    paths: ["./src/less", "./src/demo/less"],
                    cleancss: false
                },
                files: {
                    "./src/css/main.less.css": "./src/less/main.less"
                }
            }
        },
        watch: {
            // runs less task when any less files change
            less: {
                files: ["./src/less/*", "./src/demo/less/*"],
                tasks: ["less"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'less',
        'watch'
    ]);
};