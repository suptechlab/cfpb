'use strict';

var webStorageProxy = require( '../modules/util/web-storage-proxy' );

function init() {
  if( !window.env ){
    setTimeout( function() {
      // Grab stuff from step 1.
      var subproductname = webStorageProxy.getItem( 'subproduct_selected', localStorage )
        .replace( '-', ' ' ).replace( '-', ' ' ).replace( '-', ' ' )
          .replace( '-', ' ' ).replace( '-', ' ' );
      $( '#product-name-for-ask' ).text( subproductname );
    }, 1);
  }
}

module.exports = {
  init: init
};
