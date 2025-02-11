'use strict';

var gulp = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();
var configPkg = require( '../config' ).pkg;
var configBanner = require( '../config' ).banner;
var configScripts = require( '../config' ).scripts;
var handleErrors = require( '../utils/handle-errors' );
var browserSync = require( 'browser-sync' );

gulp.task( 'scripts', function() {
  return gulp.src( configScripts.src )
    .pipe( plugins.sourcemaps.init() )
    .pipe( plugins.webpack( {
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [
          { test: /\.handlebars$/, loader: 'handlebars-loader' }
        ]
      }
    } ) )
    .pipe( plugins.uglify() )
    .on( 'error', handleErrors )
    .pipe( plugins.header( configBanner, { pkg: configPkg } ) )
    .pipe( plugins.rename( {
      suffix: '.min'
    } ) )
    .pipe( plugins.sourcemaps.write( '.' ) )
    .pipe( gulp.dest( configScripts.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );
