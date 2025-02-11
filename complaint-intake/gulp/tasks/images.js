'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var configImages = require( '../config' ).images;
var handleErrors = require( '../utils/handle-errors' );
var browserSync = require( 'browser-sync' );

gulp.task( 'images', function() {
  return gulp.src( configImages.src )
    .pipe( $.changed( configImages.dest ) )
    .pipe( $.imagemin() )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( configImages.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );
