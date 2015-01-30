module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mochatest');

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['src/**/*.js', 'test/**/*.js'],
        tasks: ['mochaTest']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        }
        src: ['test/**/*.js']
      }
    }
  });
};