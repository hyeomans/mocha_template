module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-mocha-test'

  grunt.initConfig
    watch:
      scripts:
        files: ['src/**/*.coffee', 'test/**/*.coffee']
        tasks: ['mochaTest']
    mochaTest:
      test:
        options:
          reporter: 'spec'
          require: 'coffee-script/register'
        src: ['test/**/*.coffee']