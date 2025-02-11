'use strict';

var internationalAddresses = require( './international-addresses' );
var webStorageProxy = require( '../modules/util/web-storage-proxy' );

function init() {
  // Show/hide product identification options.
  $( 'fieldset.identify-options' ).hide();

  internationalAddresses.init();

  // Show/hide affiliation follow-up questions
  $( '.cr-servicemember input' ).on( 'change', function(){
    if ( $( '#cr-military-spouse' ).is( ':checked' ) ) {
      $( '#servicemember-details' ).slideDown( 400 );
      $( '.cr-servicemember-info' ).slideUp( 300 );
      $( '.cr-military-status hr' ).hide();
    } else {
      $( '#servicemember-details' ).slideUp( 400 );
    }

    if ( $( '#cr-military-status' ).is( ':checked' ) ) {
      $( '#servicemember-details1' ).slideDown( 400 );
      $( '.cr-servicemember-info' ).slideUp( 300 );
      $( '.cr-military-status hr' ).show();
    } else {
      $( '#servicemember-details1' ).slideUp( 400 );
    }

    if ( $( '#cr-small-business-owner' ).is( ':checked' ) ) {
      $( '#small-business-owner-details' ).slideDown( 400 );
      $( '.cr-servicemember-info' ).slideUp( 300 );
      $( '.cr-military-status hr' ).show();
    } else {
      $( '#small-business-owner-details' ).slideUp( 400 );
    }

    if ( !$( '#cr-military-status' ).is( ':checked' ) &&
         !$( '#cr-military-spouse' ).is( ':checked' ) &&
         !$( '#cr-small-business-owner' ).is( ':checked' ) ) {
      $( '.cr-servicemember-info, .cr-military-status' ).slideUp( 300 );
    }
  } );
  $( '.cr-military-status' ).slideUp();

  // Show/hide small business follow-up questions
  $( '#small-business-owner-details .select-product-or-issue' ).on( 'change', '.radio_input', function() {
    var isBusinessOwner = $( this ).val();
    if( isBusinessOwner === 'yes' ) {
      $( '#small-business-owner-followups' ).slideDown( 400 );
    } else {
      $( '#small-business-owner-followups' ).slideUp( 400 );
    }
  });

  // Show/hide sections of Your Info.
  $( 'fieldset.additional-consumer' ).hide();
  $( 'fieldset.point-of-contact' ).hide();

  $( '.add-consumer-yes' ).on( 'change', function(){
    if ( $( '.add-consumer-yes' ).is( ':checked' ) ) {
      $( 'fieldset.additional-consumer' ).slideDown( 400 );
      $( '.cr-add-con label.active' ).removeClass( 'active' );
      $( this ).closest( 'label' ).addClass( 'active' );
    }
  } );

  $( '.add-consumer-no' ).on( 'change', function(){
    if ( $( '.add-consumer-no' ).is( ':checked' ) ) {
      $( 'fieldset.additional-consumer' ).slideUp( 400 );
      $( '.cr-add-con label.active' ).removeClass( 'active' );
      $( this ).closest( 'label' ).addClass( 'active' );
    }
  } );

  $( '.add-poc-yes' ).on( 'change', function(){
    if ( $( '.add-poc-yes' ).is( ':checked' ) ) {
      $( 'fieldset.point-of-contact' ).slideDown( 400 );
      $( '.cr-add-poc label.active' ).removeClass( 'active' );
      $( this ).closest( 'label' ).addClass( 'active' );
    }
  } );

  $( '.add-poc-no' ).on( 'change', function() {
    if ( $( '.add-poc-no' ).is( ':checked' ) ) {
      $( 'fieldset.point-of-contact' ).slideUp( 400 );
      $( '.cr-add-poc label.active' ).removeClass( 'active' );
      $( this ).closest( 'label' ).addClass( 'active' );
    }
  } );

  // -------------------------------

  $( '#debt-obtained input' ).on( 'change', function() {
    if ( $( '.cr-debt-inperson' ).is( ':checked' ) ) {
      $( '.debt-website' ).slideUp( 400 );
      $( '.debt-state' ).slideDown( 400 );
    } else if ( $( '.cr-debt-online' ).is( ':checked' ) ) {
      $( '.debt-website' ).slideDown( 400 );
      $( '.debt-state' ).slideUp( 400 );
    }
  } );

  $( '#relationship-to-person select' ).change( function() {
    if( $( '.ans-rel-other' ).is( ':checked' ) ) {
      $( '#ans-rel-other-who' ).slideDown();
    } else {
      $( '#ans-rel-other-who' ).slideUp();
    }
  } );

  $( '#consumer-info-no-email' ).hide();
  $( '#cr-no-email' ).change( function() {
    if ( $( '#cr-no-email' ).is( ':checked' ) ) {
      $( '#consumer-info-no-email' ).slideDown();
    } else {
      $( '#consumer-info-no-email' ).slideUp();
    }
  } );

  // SLIDE DOWN ALTERNATIVE IDENTIFICATION METHODS.

  $( '.identify-user' ).on( 'change', function() {

    if ( $( '.identification-type' ).is( ':checked' ) ) {
      var identifytype = $(this).attr( 'value' );
      $( 'fieldset.identify-options.active' ).hide();
      $( '.identify-options' ).removeClass( 'active' );
      $( 'fieldset.' + identifytype).slideDown().addClass( 'active' );

      if ( identifytype == 'someone-else' ) {
        // When "someone else" is selected, the "Point of contact" section slides down, the optional question slides up, and the header text changes
        $( 'fieldset.point-of-contact' ).slideDown();
        $( 'fieldset.point-of-contact-question' ).slideUp();
        $( '#point-of-contact-header' ).text( 'Additional point of contact' );
      } else if ( identifytype != 'someone-else' && $( '.add-poc-yes' ).is( ':checked' ) ) {
        // When "someone else" is not selected, but the consumer has already said "Yes" in the "Point of contact" section, the Point of contact section stays open but the optional question slides back down and the header changes back
        $( 'fieldset.point-of-contact-question' ).slideDown();
        $( '#point-of-contact-header' ).text( 'Additional point of contact' );
      }
      else {
        // When "someone else" is not selected and the consumer hasn't said yes in the "Point of contact" section, everything returns to the default
        $( 'fieldset.point-of-contact' ).slideUp();
        $( 'fieldset.point-of-contact-question' ).slideDown();
        $( '#point-of-contact-header' ).text( 'Additional point of contact' );
      }
    }
  } );

  // ADDITIONAL INFO FOR TYPE OF POINT OF CONTACT.
  // point-of-contact-identity.
  $( '#consumer1-identity' ).hide();
  $( '#addcon-phone-number' ).hide();
  $( '#addcon-email-helper' ).hide();
  $( '#poc-email-helper' ).hide();
  $( '#poc-phone-number' ).hide();
  $( '#poc-allow-access-disclosure' ).hide();
  $( '#add-consumer-allow-access-disclosure' ).hide();
  // $( '#poc-disclosure' ).hide();

  // Hide primary and additional consumer, point of contact, and all pronouns by default.
  $( '#select_product' ).hide();
  $( '#additional-consumer' ).hide();
  $( '#point-of-contact' ).hide();
  $( '.consumer-pronoun' ).hide();

  // Show the correct sections and pronouns
  $( '#select-who-involved .radio' ).on( 'change', function() {
    if ( $ ( '#select-who-involved_just-me' ).is( ':checked' ) ) {
      $( '#select_product' ).slideDown();
      $( '#additional-consumer' ).slideDown();
      $( '#point-of-contact' ).slideDown();
      $( '.consumer-pronoun' )
        .hide()
        .filter( '.consumer-pronoun__second-person' )
        .show();
    }
    else if ( $ ( '#select-who-involved_someone-else' ).is( ':checked' ) ) {
      $( '#select_product' ).slideDown();
      $( '#additional-consumer' ).slideDown();
      $( '#point-of-contact' ).slideDown();
      $( '.consumer-pronoun' )
        .hide()
        .filter( '.consumer-pronoun__third-person' )
        .show();
    }
    else if ( $ ( '#select-who-involved_me-someone-else' ).is( ':checked' ) ) {
      $( '#select_product' ).slideDown();
      $( '#additional-consumer' ).slideDown();
      $( '#point-of-contact' ).slideDown();
      $( '.consumer-pronoun' )
        .hide()
        .filter( '.consumer-pronoun__second-person' )
        .show();
    }
  } );

  $( '#ans-poc-other-who' ).slideUp();
    $( '#point-of-contact-identity' ).on( 'change', function() {
    var poctype = $(this).val();
    $( '#ans-poc-other-who' ).slideDown();

    /* alert(poctype); */

    // Change out label for additional info field based on the user's selection for "Relationship to consumer"
    $( '#ans-poc-other-who' ).show();

    switch ( poctype ) {

      case 'family-member':
        $( '#cr-poc-other-who-label' ).text( 'Type of family member' );
        break;

      case 'friend':
        $( '#ans-poc-other-who' ).slideUp();
        break;

      case 'attorney':
        $( '#cr-poc-other-who-label' ).text( 'Law firm or practice' );
        break;

      case 'gov-employee':
        $( '#cr-poc-other-who-label' ).text( 'Agency or organization' );
        break;

      case 'advocate':
        $( '#cr-poc-other-who-label' ).text( 'Organization name' );
        break;

      case 'housing-counselor':
        $( '#cr-poc-other-who-label' ).text( 'Organization name' );
        break;

      case 'other':
        $( '#cr-poc-other-who-label' ).text( 'Type of relationship' );
        break;

      default:
        $( '#cr-poc-other-who-label' ).text( 'Organization name' );
    }
  } );

  $( '#cr-add-consumer-full' ).change( function() {
    if ( $ ( '#cr-add-consumer-full' ).is( ':checked' ) ) {
      $( '#addcon-optional-status' ).text( '' );
      $( '#addcon-email-helper' ).slideDown();
      $( '#addcon-phone-number' ).slideDown();
      $( '#add-consumer-allow-access-disclosure' ).slideDown();
      $( '.additional-consumer-email' ).removeClass( 'cr-question-last' );
    } else {
      $( '#addcon-optional-status' ).text( '(Optional)' );
      $( '#addcon-email-helper' ).slideUp();
      $( '#addcon-phone-number' ).slideUp();
      $( '#add-consumer-allow-access-disclosure' ).slideUp();
      $( '.additional-consumer-email' ).addClass( 'cr-question-last' );
    }
  } );

  $( '#cr-add-poc-full' ).change( function() {
    if ( $( '#cr-add-poc-full' ).is( ':checked' ) ) {
      $( '#poc-phone-number' ).slideDown( 400 );
      $( '#poc-email-helper' ).slideDown();
      $( '#poc-allow-access-disclosure' ).slideDown();
      $( '.poc-email-address' ).removeClass( 'cr-question-last' );
    } else {
      $( '#poc-phone-number' ).slideUp( 400 );
      $( '#poc-allow-access-disclosure' ).slideUp();
      $( '#poc-email-helper' ).hide();
      $( '.poc-email-address' ).addClass( 'cr-question-last' );
    }
  } );

  if( !window.env ) {
    setTimeout( function() {
      var product = webStorageProxy.getItem( 'product_selected', localStorage );
      var subproduct = webStorageProxy.getItem( 'subproduct_selected', localStorage );
      var issue = webStorageProxy.getItem( 'issue_selected', localStorage );

      // alert(product + ', ' + subproduct + ', ' + issue);
      if ( product === 'credit_reporting' ) {
        $( '#consumer1-identity' ).hide();
        $( '#consumer2-identity' ).remove();
      } else if ( product === 'debt' ) {
        $( '#consumer1-identity' ).hide();
        $( '#consumer2-identity' ).remove();
      } else if ( product === 'mortgage' ||
                  product === 'student_loan' ||
                  product === 'vehicle_loan' ||
                  product === 'consumer_loan' ) {
        $( '#primary-consumer-identity-option1' ).text( 'Primary borrower' );
        $( '#primary-consumer-identity-option2' ).text( 'Co-borrower' );
        $( '#primary-consumer-identity-option3' ).text( 'Co-signer' );
        $( '#additional-consumer-identity-option1' ).text( 'Additional account holder' );
        $( '#additional-consumer-identity-option2' ).text( 'Co-borrower' );
        $( '#additional-consumer-identity-option3' ).text( 'Co-signer' );
      } else if ( product === 'card' ) {
        $( '#primary-consumer-identity-option1' ).text( 'Joint account holder' );
        $( '#primary-consumer-identity-option2' ).text( 'Additional card holder' );
        $( '#primary-consumer-identity-option3' ).hide();
        $( '#additional-consumer-identity-option1' ).text( 'Joint account holder' );
        $( '#additional-consumer-identity-option2' ).text( 'Additional card holder' );
        $( '#additional-consumer-identity-option3' ).hide();
      } else if ( product === 'checking' ) {
        $( '#primary-consumer-identity-option1' ).text( 'Joint account holder' );
        $( '#primary-consumer-identity-option2' ).text( 'Other' );
        $( '#primary-consumer-identity-option3' ).hide();
        $( '#additional-consumer-identity-option1' ).text( 'Joint account holder' );
        $( '#additional-consumer-identity-option2' ).text( 'Other' );
        $( '#additional-consumer-identity-option3' ).hide();
      } else if ( product === 'money_trans' ) {
        $( '#primary-consumer-identity-option1' ).text( 'Sender' );
        $( '#primary-consumer-identity-option2' ).text( 'Recipient' );
        $( '#primary-consumer-identity-option3' ).hide();
        $( '#additional-consumer-identity-option1' ).text( 'Sender' );
        $( '#additional-consumer-identity-option2' ).text( 'Recipient' );
        $( '#additional-consumer-identity-option3' ).hide();
      }

      if ( subproduct === 'vehicle-lease' ) {
        $( '#primary-consumer-identity-option1' ).text( 'Joint account holder' );
        $( '#primary-consumer-identity-option2' ).text( 'Co-signer' );
        $( '#primary-consumer-identity-option3' ).remove();
        $( '#additional-consumer-identity-option1' ).text( 'Joint account holder' );
        $( '#additional-consumer-identity-option2' ).text( 'Co-signer' );
        $( '#additional-consumer-identity-option3' ).remove();
      } else if ( subproduct === 'international-money-transfer' ||
                  subproduct === 'domestic-money-transfer' ||
                  subproduct === 'check-cashing' ||
                  subproduct === 'money-order' ||
                  subproduct === 'traveler-or-cashier' ||
                  subproduct === 'virtual-currency' ||
                  subproduct === 'foreign-currency-exchange' ) {
        $( '#primary-consumer-identity-option1' ).text( 'Sender' );
        $( '#primary-consumer-identity-option2' ).text( 'Recipient' );
        $( '#primary-consumer-identity-option3' ).remove();
        $( '#additional-consumer-identity-option1' ).text( 'Sender' );
        $( '#additional-consumer-identity-option2' ).text( 'Recipient' );
        $( '#additional-consumer-identity-option3' ).remove();
        $( '#add-consumer-label' ).text( 'Does this complaint involve someone else?' );
        $( '#consumer1-identity' ).show().slideDown();
      } else if ( subproduct === 'mobile-wallet' ) {
        $( '#consumer1-identity' ).hide();
        $( '#additional-consumer-identity-option1' ).text( 'Joint account holder' );
        $( '#additional-consumer-identity-option2' ).text( 'Sender' );
        $( '#additional-consumer-identity-option3' ).text( 'Recipient' ).show();
      } else if ( subproduct === 'refund-anticipation' ) {
        $( '#consumer1-identity' ).hide();
        $( '#consumer2-identity' ).remove();
      } else if ( subproduct === 'debt-settlement' ) {
        $( '#consumer1-identity' ).hide();
        $( '#consumer2-identity' ).remove();
      } else {
        $( '#consumer1-identity' ).hide();
      }

    }, 11);
  }
}

module.exports = {
  init: init
};
