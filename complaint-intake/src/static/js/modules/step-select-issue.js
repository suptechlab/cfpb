'use strict';

var disputeCaseNumber = require( './dispute-case-number' );
var webStorageProxy = require( '../modules/util/web-storage-proxy' );

function init() {
  disputeCaseNumber.init();

  $( '.all-subissues' ).hide();
  $( '.debt-collection-zombie' ).hide();
  $( '.credit-reporting-zombie' ).hide();
  $( '#debt_collection_subsubissues' ).hide();
  $( '#credit_reporting_subsubissues' ).hide();
  $( '#zombie_subissues_sublabel' ).hide();
  $( '.resolution-options' ).hide();

  $( '#select_issue .radio_input' ).on( 'change', function() {
    $( '.resolution-options' ).slideDown();
    if ( $( '#select_issue .issue' ).is( ':checked' ) ) {
      $( '.all-subissues' ).hide();
      $( '.debt-collection-zombie' ).hide();
      $( '.credit-reporting-zombie' ).hide();
      $( '.subissue_label' ).hide();
      $( '#zombie_subissues_sublabel' ).hide();
      var subissuetype = $( this ).attr( 'id' );
      $( '#select_issue label.active' ).removeClass( 'active' );
      $( '.' + $( this ).attr( 'id' ) + '_subissues' ).fadeIn( 'fast' );
      $( '#' + $( this ).attr( 'id' ) + '_subissues' ).slideDown( 200 );
      $( this ).closest( 'label' ).addClass( 'active' );
    }
  } );

  $( '#select_subissue .radio_input' ).on( 'change', function() {
    if ( $( '#select_subissue .issue' ).is( ':checked' ) ) {
      $( '.subsubissues' ).hide();
      $( '#select_subissue label.active' ).removeClass( 'active' );
      $( '#zombie_subissues_sublabel' ).slideDown();
      $( '#' + $(this).attr( 'id' ) + '_subissues_sublabel' ).slideDown();
      $( '#' + $(this).attr( 'id' ) + '_subissues' ).slideDown( 200 ).addClass( 'subsubissues' );
      $(this).closest( 'label' ).addClass( 'active' );
    }
  } );

  $( '.all-subissues .radio_input' ).on( 'change', function() {

    if ( $( '.radio_input' ).is( ':checked' ) ) {
      $( this ).parents( '.all-subissues' ).find( 'label' ).removeClass( 'active' );
      $( this ).closest( 'label' ).addClass( 'active' );
    }
  } );

  $( '.subsubissues .radio_input' ).on( 'change', function() {
    if ( $( '.radio_input' ).is( ':checked' ) ) {
      $( '.subsubissues label' ).removeClass( 'active' );
      $( this ).closest( 'label' ).addClass( 'active' );
    }
  } );

  $( '.resolution-attempt' ).on( 'change', function() {
    $( this ).closest( 'label' ).toggleClass( 'active' );
  } );

  /**
   * Shows and hides mortgage subissue followup questions based on answers to
   * preceeding trigger questions
   */
  $( '.mortgage-servicer-subissue-question__radio' ).on( 'change', '.radio_input', function() {
    var mortageQuestionModel = {};
    var thisQuestionID = $( this ).parents( '.mortgage-servicer-subissue-question__radio' ).attr( 'id' );
    var $folowupQuestions = $( '[data-followup-to*="' + thisQuestionID + '"]' );
    $( '.mortgage-servicer-subissue-question__radio' ).each( function() {
      var questionID = $( this ).attr( 'id' );
      var questionValue = $(this).find( '.radio_input:checked' ).val();
      mortageQuestionModel[ questionID ] = questionValue;
    } );
    $folowupQuestions.each( function() {
      var $question = $( this );
      var triggerQuestionIDs = $question.attr( 'data-followup-to' ).split( ' ' );
      // If ANY of the follow-up question's triggers are answered "yes", show the
      // follow-up. Otherwise, hide the follow-up.
      for (var i = 0; i < triggerQuestionIDs.length; i++) {
        var triggerAnswer = mortageQuestionModel[ triggerQuestionIDs[ i ] ];
        if ( triggerAnswer === 'yes' ) {
          $question.slideDown();
          break;
        }
        $question.slideUp();
      };
    } );
  } );

  if( !window.env ){
    setTimeout( function() {
      // grab stuff from step 1
      var subproduct = webStorageProxy.getItem( 'subproduct_selected', localStorage );
      if ( subproduct ) {
        var subproductname = subproduct.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
        $( '#product-name-in-subhead' ).text( subproductname );
      }
      var issuelist = webStorageProxy.getItem( 'issue_list', localStorage );
      $( '.all-topissues' ).hide();
      $( '#issue_options_' + issuelist ).slideDown( 200 );
      // $('#issue_options_' + issuelist).show();
    }, 1 );

    setTimeout( function() {
      $( '#select_issue .all-topissues .radio_input' ).click( function() {
        // save the topissue to local storage
        var issueselected = $( this ).attr( 'id' );
        webStorageProxy.setItem( 'issue_selected', issueselected, localStorage );
      } );
    }, 1 );
  }
}

module.exports = {
  init: init
};
