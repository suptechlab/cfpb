/**
 * Submit a complaint
 */

/**
 * Note: This JS is not eloquent. It was quickly written to demonstrate
 * interactions for the functional prototype. It should be modularized before
 * entering production.
 */

$(function() {

  /**
   *  Highlight selected radios on DOM load
  **/
  $( '.cr-radios .radio input' ).each(function(){
    if ( $(this).is( ':checked' ) ) {
      $(this).parent().addClass( 'selected' );
    }
  });

  /**
   * Toggle follow-up text
   */
  /* $( '#cr-question-1' ).on( 'change', '#cr-describe-issue', function(){
    var followUp = $( '#cr-question-1' ).find( ':selected' ).attr( 'data-follow-up' ),
        $followUp = $( '.' + followUp);
    if (followUp) {
      $( '.follow-up' ).hide();
      $followUp.show();
    } else {
      $( '.follow-up' ).hide();
    }
  });*/

  /**
   * Autocomplete company names
   */
  // $( 'input.cr-company-search, input.cr-diff-company-search' ).typeahead({
  //   source: companies,
  //   limit: 10
  // });

  /**
   * Add another phone number button
   */
  /*$( '.add-number' ).on( 'click', function() {
    var div = document.createElement( 'div' ),
        phoneContainer = $(this).parent(),
        phone = $( '.cr-phone' ).first().html();
    phoneContainer.find( '.cr-phone' ).removeClass( 'last' ).addClass( 'first' );
    $(div).append(phone).addClass( 'cr-phone last' );
    $(this).before(div);
    if ( phoneContainer.find( '.cr-phone' ).length >= 2 ) {
      $(this).remove();
    }
    return false;
  });*/

  /**
   * Show/hide info of debt origin company
   */
  /*$( 'input.cr-company-search' ).on( 'keyup', function(){
    if ( $(this).val().length && $(this).val().length > 0 ) {
      $( '.cr-company-address' ).slideDown(400);
    } else {
      $( '.cr-company-address' ).slideUp(300);
    }
  });*/

  /**
   * Show/hide info of creditor company
   */
  /*$( 'input.cr-diff-company-search' ).on( 'keyup', function(){
    if ( $(this).val().length && $(this).val().length > 0 ) {
      $( '.cr-diff-company-address' ).slideDown(400);
    } else {
      $( '.cr-diff-company-address' ).slideUp(300);
    }
  });*/

  /**
   * Hide creditor company info when "I do not know the company name"
   * is checked
   */
  /*$( '.cr-hide-diff-company' ).on( 'change', function(){
    if ( $( '.cr-hide-diff-company' ).is( ':checked' ) ) {
      $( '.cr-diff-company-address' ).slideUp(200);
      $( '.cr-diff-company-search' ).attr( 'disabled', 'disabled' ).css( 'backgroundColor', '#eee' );
    } else {
      if ( $( '.cr-diff-company-search' ).val().length > 0 ) {
        $( '.cr-diff-company-address' ).slideDown(200);
      }
      $( '.cr-diff-company-search' ).removeAttr( 'disabled' ).css( 'backgroundColor', '#fff' );
    }
  });*/

  /**
   * Hide company info when "I do not know the debt collection company name"
   * is checked
   */
  /*$( '.cr-hide-company' ).on( 'change', function(){
    if ( $( '.cr-hide-company' ).is( ':checked' ) ) {
      $( '.cr-company-address' ).slideUp(200);
      $( '.cr-company-search' ).attr( 'disabled', 'disabled' ).css( 'backgroundColor', '#eee' );
    } else {
      if ( $( '.cr-company-search' ).val().length > 0 ) {
        $( '.cr-company-address' ).slideDown(200);
      }
      $( '.cr-company-search' ).removeAttr( 'disabled' ).css( 'backgroundColor', '#fff' );
    }
  });*/

  /**
   * Show/hide info of debt origin company
   */
  /*$( '#debt-origin input' ).on( 'change', function(){
    if ( $( '.cr-diff-company' ).is( ':checked' ) ) {
      $( '.cr-diff-company-info' ).slideDown(400);
    } else {
      $( '.cr-diff-company-info' ).slideUp(300);
    }
  });*/

  /**
   * Some super ugly faux form validation on the page 1 questions to
   * demonstrate desired functionality we'd want from form validation
   */
  /*$el = $( '#cr-answer-1 input, #cr-question-2 .follow-up, #cr-answer-3, #cr-answer-4' );

  $el.on( 'change', function(){
    var self = this,
        $validator = $(this).parents( '.cr-question' ).find( '.cr-validate' );
    $validator.removeClass( 'success failure' ).addClass( 'loading' );
    window.setTimeout(function(){
      if ($(self).find( 'textarea' ).length === 0 || $(self).find( 'textarea' ).val().length > 0) {
        $validator.removeClass( 'loading failure' ).addClass( 'success' );
        $(self).find( 'textarea' ).removeClass( 'failure' );
      } else {
        $validator.removeClass( 'loading success' ).addClass( 'failure' );
        $(self).find( 'textarea' ).removeClass( 'success' ).addClass( 'failure' );
      }
    }, 1000);

  });*/

  /*
  $( '.cr-continue button[data-next-step=2]' ).on( 'click', function(){
    var numPassed = 0;

    // check if radio was selected in first question
    if ( $( '#cr-describe-issue' ).val() ) {
      numPassed++;
      $( '#cr-question-1 .cr-validate' ).removeClass( 'failure' ).addClass( 'success' );
      $( '#cr-question-1 .cr-validate-message' ).hide();
    } else {
      $( '#cr-question-1 .cr-validate' ).removeClass( 'success' ).addClass( 'failure' );
      $( '#cr-question-1 .cr-validate-message' ).show();
    }

    // check if text was entered in third question's textarea
    if ( $( '#cr-answer-3 textarea' ).val() && $( '#cr-answer-3 textarea' ).val().length > 0 ) {
      numPassed++;
      $( '#cr-answer-3 .cr-validate-message' ).hide();
    } else {
      $( '#cr-answer-3 textarea' ).addClass( 'failure' );
      $( '#cr-answer-3 .cr-validate' ).removeClass( 'success' ).addClass( 'failure' );
      $( '#cr-answer-3 .cr-validate-message' ).show();
    }

    // check if text was entered in fourth question's textarea
    if ( $( '#cr-answer-4 textarea' ).val() && $( '#cr-answer-4 textarea' ).val().length > 0 ) {
      $( '#cr-answer-4 .cr-validate-message' ).hide();
      numPassed++;
    } else {
      $( '#cr-answer-4 textarea' ).addClass( 'failure' );
      $( '#cr-answer-4 .cr-validate' ).removeClass( 'success' ).addClass( 'failure' );

      $( '#cr-answer-4 .cr-validate-message' ).show();
    }

    if (numPassed >= 3) {
      document.location.href = 'step-2.html';
    } else {
      // show error panel
      $(".error-panel").show();

      // scroll to top
      $("html, body").animate({ scrollTop: "0px" });
    }
  });
*/
/*

/////////////
/////////////
/////////////
IDENTIFY COMPANIES PAGE
/////////////
/////////////
/////////////

*/

/*
// MOVED TO static/js/main.js
// TODO: remove this block when it's verified form is working as expected.
$( '.identify-account' ).on( 'change', function() {
  if ( $( '.identification-type' ).is( ':checked' ) ) {
    var identifytype = $(this).attr( 'value' );
    var companytype = $(this).closest( 'fieldset' ).attr( 'id' );
    $( 'fieldset.identify-options.active-' + companytype ).hide();
    $( '.identify-account label.active' ).removeClass( 'active' );
    $( '#fieldset_repository fieldset.' + identifytype )
      .clone().appendTo( $( this ).closest( 'fieldset' ) )
        .slideDown().addClass( 'active-' + companytype );
  }
} );
*/

/*

ASK FOR IDENTIFYING INFO AFTER COMPANY NAME IS PROVIDED

*/

/*


/////////////
/////////////
/////////////
YOUR INFORMATION PAGE
/////////////
/////////////
/////////////

*/

  $( '#annotations-toggle.closed' ).on( 'click', function(){
    $( '#annotations-list' ).slideDown();
    $( '#annotations-toggle a' ).text( 'Close annotations' );
    $( '#annotations-toggle' ).removeClass( 'closed' );
    $( '#annotations-toggle' ).addClass( 'opened' );
    $( '.wrapper-container' ).addClass( 'annoslide' );
  } );

  // error handling without adding a #error-elm
  $( '.error-panel a' ).click( function() {
    $( $( this ).attr( 'href' ) ).focus();
    return false;
  } );

  if ( $( 'h1' ).width() > 500 ) {
    $( 'h1' ).css( 'font-size', '1.5em' );
  }
} );

  /**
   * modal functions
   */

  $( '#save-and-continue-review-page' ).on( 'click', function(){
    $( '<div class="cr-modal"><div class="cr-modal-bg">&nbsp;</div><div class="cr-modal-offset"><div class="cr-modal-content"><div class="cr-modal-inner"><h2>Complaint saved!</h2> <p class="your-id-number">Your complaint draft ID is <strong>141030-43002</strong></p> <p>We have sent an email to <strong>p.robinson@gmail.com</strong> that includes this complaint draft ID and a link to log in to your account and finish submitting your complaint.</p> <p>You can also complete this complaint over the phone by calling us at (855) 411-2372 and providing this draft ID number along with your email address and phone number.</p> <p>Make sure to come back soon! Your link will expire on November 10th, 2014. After that date, your information will be securely removed from our servers.</p> <a href="#" class="cr-modal-close">Close</a></div></div></div></div>' ).appendTo( 'body' );
    $(".cr-modal").animate({
      opacity: 1
    }, 600 );
  });
