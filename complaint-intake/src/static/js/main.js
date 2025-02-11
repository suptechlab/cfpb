'use strict';

var globalModals = require( './modules/global-modals' );
var stepWelcome = require( './modules/step-welcome' );
var stepSelectProduct = require( './modules/step-select-product' );
var stepSelectIssue = require( './modules/step-select-issue' );
var stepWhatHappened = require( './modules/step-what-happened' );
var stepCompanyInformation = require( './modules/step-company-information' );
var stepYourInformation = require( './modules/step-your-information' );
var stepReviewAndSubmit = require( './modules/step-review-and-submit' );

// Determine what step the script is on.
var path = window.location.pathname.split( '/' );
path = path[path.length-1].toLowerCase();
switch ( path ) {
  case 'welcome.html':
    stepWelcome.init();
    break;
  case 'select-product.html':
    stepSelectProduct.init();
    break;
  case 'select-issue.html':
    stepSelectIssue.init();
    break;
  case 'what-happened.html':
    stepWhatHappened.init();
    break;
  case 'company-information.html':
    stepCompanyInformation.init();
    break;
  case 'your-information.html':
    stepYourInformation.init();
    break;
  case 'review-and-submit.html':
    stepReviewAndSubmit.init();
    break;
}
// Run global scripts
globalModals.init();
