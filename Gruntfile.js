/*
 *  Copyright (c) 2016 pro!vision GmbH and Contributors
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

"use strict";

module.exports = function(grunt) {

  // load local tasks
  grunt.loadTasks('tasks');

  // Project configuration.
  grunt.initConfig({

    clean: {
      "result": ["test/result.js"]
    },

    nodeunit: {
      tests: ["test/*.test.js"]
    },

    es3ify: {

      // task target 'build'
      build: {
        src: "test/source.js",
        dest: "test/result.js"
      },

      // set "readOnly" flag for testing
      test: {
        options: {
          readOnly: true
        },
        src: "test/src/*.js"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  // default task will be used for 'frontend sync'
  grunt.registerTask("default", ["clean", "es3ify:build", "nodeunit"]);
};
