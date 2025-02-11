module.exports = function(grunt) {

  'use strict';

  var path = require('path');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          targetDir: 'src/vendor/',
          install: true,
          verbose: true,
          cleanBowerDir: true,
          cleanTargetDir: true,
          layout: function(type, component) {
            if (type === 'img') {
              return path.join('../../demo/static/img');
            } else if (type === 'fonts') {
              return path.join('../../demo/static/fonts');
            } else {
              return path.join(component);
            }
          }
        }
      }
    },

    clean: {
      vendor: [
        'src/vendor/cf-concat/cf.less'
      ]
    },

    concat: {
      main: {
        src: [
          'src/*.less',
          'src/vendor/cf-*/*.less'
        ],
        dest: 'src/vendor/cf-concat/cf.less',
      }
    },

    less: {
      main: {
        options: {
          paths: grunt.file.expand('src/','src/vendor/**/'),
          yuicompress: false
        },
        files: {
          'demo/static/css/main.css': [
            'src/vendor/normalize-css/normalize.css',
            'src/vendor/cf-concat/cf.less'
          ]
        }
      }
    },

    'string-replace': {
      vendor: {
        files: {
          'demo/static/css/': [
            'demo/static/css/main.css',
            'demo/static/css/main.lt-ie8.css'
          ]
        },
        options: {
          replacements: [{
            pattern: /url\((.*?)\)/ig,
            replacement: function (match, p1, offset, string) {
              var path, pathParts, pathLength, filename, newPath;
              path = p1.replace(/["']/g,''); // Removes quotation marks if there are any
              pathParts = path.split('/'); // Splits the path so we can find the filename
              pathLength = pathParts.length;
              filename = pathParts[pathLength-1]; // The filename is the last item in pathParts

              grunt.verbose.writeln('');
              grunt.verbose.writeln('--------------');
              grunt.verbose.writeln('Original path:');
              grunt.verbose.writeln(match);
              grunt.verbose.writeln('--------------');

              // Rewrite the path based on the file type
              // Note that .svg can be a font or a graphic, not usre what to do about this.
              if (filename.indexOf('.eot') !== -1 ||
                  filename.indexOf('.woff') !== -1 ||
                  filename.indexOf('.ttf') !== -1 ||
                  filename.indexOf('.svg') !== -1)
              {
                newPath = 'url("../fonts/'+filename+'")';
                grunt.verbose.writeln('New path:');
                grunt.verbose.writeln(newPath);
                grunt.verbose.writeln('--------------');
                return newPath;
              } else if (filename.indexOf('.png') !== -1 ||
                  filename.indexOf('.gif') !== -1 ||
                  filename.indexOf('.jpg') !== -1)
              {
                newPath = 'url("../img/'+filename+'")';
                grunt.verbose.writeln('New path:');
                grunt.verbose.writeln(newPath);
                grunt.verbose.writeln('--------------');
                return newPath;
              } else {
                grunt.verbose.writeln('No new path.');
                grunt.verbose.writeln('--------------');
                return match;
              }

              grunt.verbose.writeln('--------------');
              return match;
            }
          }]
        }
      }
    },

    autoprefixer: {
      options: {
        // Options we might want to enable in the future.
        diff: false,
        map: false
      },
      multiple_files: {
        // Prefix all CSS files found in `src/static/css` and overwrite.
        expand: true,
        src: 'demo/static/css/main.css'
      },
    },

    legacssy: {
      demo: {
        options: {
          legacyWidth: 960
        },
        files: {
          'demo/static/css/main.lt-ie9.min.css': 'demo/static/css/main.css'
        }
      }
    },

    copy: {
      component_assets: {
        files:
        [{
          expand: true,
          cwd: 'src/',
          src: ['fonts/**'],
          dest: 'demo/static/'
        }]
      },
      docs_assets: {
        files:
        [{
          expand: true,
          cwd: 'demo/',
          src: ['static/img/**', 'static/fonts/**'],
          dest: 'docs/'
        }]
      },
      docs: {
        files:
        [{
          expand: true,
          cwd: 'demo/',
          src: ['static/css/main.css'],
          dest: 'docs/'
        }]
      }
    },

    topdoc: {
      demo: {
        options: {
          source: 'demo/static/css/',
          destination: 'demo/',
          template: 'node_modules/cf-component-demo/' + ( grunt.option('tpl') || 'raw' ) + '/',
          templateData: {
            ltIE9AltSource: 'static/css/main.lt-ie9.min.css',
            ltIE8Source: 'static/css/main.lt-ie8.min.css',
            html5Shiv: true,
            family: '<%= pkg.name %>',
            title: '<%= pkg.name %> demo',
            repo: '<%= pkg.homepage %>',
            custom: '<%= grunt.file.read("demo/custom.html") %>'
          }
        }
      },
      docs: {
        options: {
          source: 'docs/static/css/',
          destination: 'docs/',
          template: 'node_modules/cf-component-demo/' + ( grunt.option('tpl') || 'code_examples' ) + '/',
          templateData: {
            title: '<%= pkg.name %> docs',
            description: '<%= pkg.description %>',
            family: '<%= pkg.name %>',
            repo: '<%= pkg.homepage %>'
          }
        }
      }
    }

  });

  /**
   * The above tasks are loaded here.
   */
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-legacssy');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-topdoc');

  /**
   * Create custom task aliases and combinations
   */
  grunt.registerTask('vendor', ['clean', 'bower', 'copy:component_assets', 'copy:docs_assets', 'concat']);
  grunt.registerTask('default', ['clean', 'concat', 'less', 'string-replace', 'autoprefixer', 'copy:docs', 'topdoc', 'legacssy']);

};
