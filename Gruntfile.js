'use strict';

module.exports = function(grunt) {
  var path = require('path');
  
  // this allows you to remove all the 'loadNPMtasks' calls, and speeds up task running
  require('jit-grunt')(grunt);

  // Metadata.
  var options = {
    pkg: grunt.file.readJSON('package.json')
  };

  //loads the various task configuration files
  var configs =   require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);


  grunt.registerTask('default', ['gh-pages']);

  grunt.registerTask('build', [
    'gh-pages'
  ]);
};

