'use strict';

var fs = require( 'fs' );
var glob = require( 'glob' );

/**
 * Set up file paths
 */
var loc = {
  src:  './src',
  dist: './dist',
  lib:  './node_modules', // eslint-disable-line no-sync, no-inline-comments, max-len
  test: './test'
};

module.exports = {
  pkg:    JSON.parse( fs.readFileSync( 'package.json' ) ), // eslint-disable-line no-sync, no-inline-comments, max-len
  banner:
      '/*!\n' +
      ' *  <%= pkg.name %> - v<%= pkg.version %>\n' +
      ' *  <%= pkg.homepage %>\n' +
      ' *  Licensed <%= pkg.license %> by Consumer Financial Protection Bureau christopher.contolini@cfpb.gov\n' +
      ' */',
  lint: {
    src: [
      loc.src + '/static/js/**/*.js',
      loc.test + '/unit_tests/**/*.js',
      loc.test + '/browser_tests/**/*.js'
    ],
    gulp: [
      'gulpfile.js',
      'gulp/**/*.js'
    ]
  },
  test: {
    src:   loc.src + '/static/js/**/*.js',
    tests: loc.test
  },
  clean: {
    dest: loc.dist
  },
  styles: {
    cwd:      loc.src + '/static/css',
    src:      '/main.less',
    dest:     loc.dist + '/static/css',
    settings: {
      paths: glob.sync(loc.lib + '/cf-*/src/'),
      compress: true
    }
  },
  scripts: {
    src: [
      loc.src + '/static/js/main.js'
    ],
    dest: loc.dist + '/static/js/',
    name: 'main.js'
  },
  images: {
    src:  loc.src + '/static/img/**',
    dest: loc.dist + '/static/img'
  },
  copy: {
    files: {
      src: [
        loc.src + '/**/*.html',
        loc.src + '/**/*.css',
        loc.src + '/**/*.pdf',
        loc.src + '/**/*.handlebars',
        loc.src + '/_*/**/*',
        loc.src + '/robots.txt',
        loc.src + '/favicon.ico',
        '!' + loc.lib + '/**/*.html',
        '!' + loc.src + '/v0/**'
      ],
      dest: loc.dist
    },
    icons: {
      src:  loc.lib + '/cf-icons/src/fonts/*',
      dest: loc.dist + '/static/fonts/'
    },
    vendorJs: {
      src: [
        loc.lib + '/html5shiv/dist/html5shiv-printshiv.min.js',
        loc.lib + '/jquery/dist/jquery.min.js',
        loc.src + '/static/js/header.min.js',
        loc.src + '/static/js/footer.min.js'
      ],
      dest: loc.dist + '/static/js/'
    },
    oldFiles: {
      src: [
        loc.src + '/v0/**'
      ],
      dest: loc.dist + '/v0/'
    }
  }
};
