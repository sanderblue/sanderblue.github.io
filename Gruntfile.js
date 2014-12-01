module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            primary: {
                files: {
                    "assets/css/main.css": "assets/sass/main.scss"
                }
            }
        },
        watch: {
            css: {
                files: [
                    'assets/sass/*/*.scss',
                    'assets/sass/*.scss',
                ],
                tasks: ['sass:primary']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass:primary']);
};
