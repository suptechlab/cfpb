'use strict';

var webStorageProxy = require( '../modules/util/web-storage-proxy' );

function init() {

  // Show/hide products
  $( '#select_subproduct' ).hide();
  $( '.subproduct_sect' ).hide();
  $( '.subproduct_label' ).hide();
  $( '#payday_questions' ).hide();
  $( '#vehicle_questions' ).hide();
  $( '#mortgage_servicer_questions' ).hide();

  $( '.radio_input' ).on( 'change', function() {

    if ( $( '.product' ).is( ':checked' ) ) {
      $( '.subproduct_label' ).hide();
      $( '.subproduct_sect' ).hide();
      $( '.subproduct_sect' ).hide();
      $( '#student_questions' ).hide();
      $( '#payday_questions' ).hide();
      $( '#vehicle_questions' ).hide();
      $( '#subproduct_options label.active' ).removeClass( 'active' );
      $( '.product-specific-questions label.active' ).removeClass( 'active' );

      $( '#product_options label.active' ).removeClass( 'active' );
      $( '#select_subproduct' ).fadeIn( 'fast' );
      $( '#' + $( this ).attr( 'id' ) + '_label' ).fadeIn( 'fast' );
      $( '#' + $( this ).attr( 'id' ) + '_products' ).slideDown(200);
      $( this ).closest( 'label' ).addClass( 'active' );
    }
  } );

  $( '#subproduct_options .radio_input_subpro' ).on( 'change', function() {
    if ( $( '.radio_input_subpro' ).is( ':checked' ) ) {
      $( '#subproduct_options label.active' ).removeClass( 'active' );
      $( '.product-specific-questions label.active' ).removeClass( 'active' );
      $( this ).closest( 'label' ).addClass( 'active' );

      if ( $( this ).parent().attr( 'data-addtlquestions' ) === 'payday' ){
        $( '#payday_questions' ).slideDown().show();
        $( '#payday_questions .follow-up' ).hide();
      } else {
        $( '#payday_questions' ).slideUp();
      }

      if ( $( this ).parent().attr( 'id' ) === 'federal-student-loan' ){
        $( '#student_questions' ).slideDown().show();
      } else if ( $( this ).parent().attr( 'id' ) === 'private-student-loan' ){
        $( '#student_questions' ).slideDown().show();
      } else {
        $( '#student_questions' ).slideUp();
      }

      if ( $( this ).parent().attr( 'id' ) === 'vehicle-loan' ){
        $( '#vehicle_questions' ).slideDown().show();
      } else if ( $( this ).parent().attr( 'id' ) === 'vehicle-lease' ){
        $( '#vehicle_questions' ).slideDown().show();
      } else {
        $( '#vehicle_questions' ).slideUp();
      }
    }
  } );

  $( '.product-specific-questions .radio_input_subpro' ).on( 'change', function(){
    if ( $( '.radio_input_subpro' ).is( ':checked' ) ) {
      $( '.product-specific-questions label.active' ).removeClass( 'active' );
      $( this ).closest( 'label' ).addClass( 'active' );
      if ( $( this ).parent().attr( 'id' ) === 'at-store' ){
        $( '#store-questions' ).slideDown().show();
      } else {
        $( '#store-questions' ).hide();
      }
      if ( $( this ).parent().attr( 'id' ) === 'online' ){
        $( '#online-questions' ).slideDown().show();
      } else {
        $( '#online-questions' ).hide();
      }
    }
  } );

  if ( !window.env ) {
    setTimeout( function(){
      $( '#product_options .radio_input' ).click( function(){
        // save the product to local storage
        var prod = $( this ).attr( 'id' );
        webStorageProxy.setItem( 'product_selected', prod, localStorage );
        webStorageProxy.setItem( 'consent', 'false', localStorage );
      } );
    }, 1);

    setTimeout( function(){
      $( '#subproduct_options .radio' ).click( function(){
        // save the subproduct to local storage
        var subpro = $( this ).attr( 'id' );
        var issuelist = $( this ).attr( 'data-issues' );
        webStorageProxy.setItem( 'issue_list', issuelist, localStorage );
        webStorageProxy.setItem( 'subproduct_selected', subpro, localStorage );

        /*
        if ( $( this ).attr('id') === 'payday-loan' ){
          alert('payday is happening.');
        }
        // alert(subpro + ', ' + issuelist);
        */
      } );
    }, 1);
  }
}

module.exports = {
  init: init
};
