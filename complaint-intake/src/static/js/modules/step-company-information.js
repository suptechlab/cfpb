'use strict';

var companiesAutocomplete = require( './companies-autocomplete' );
var internationalAddresses = require( './international-addresses' );
var webStorageProxy = require( '../modules/util/web-storage-proxy' );
var identifyOptionsHandlebars = require( '../../tmpl/identify-options.handlebars' );

// Initialize the "how should this company identify you" options.
var _mortgageOptions = {
  accountNumber:    true,
  billingAddress:   true,
  loanNumber:       true,
  residenceAddress: true
};

var _studentLoanOptions = {
  accountNumber: true,
  billingAddress: true,
  loanNumber: true,
  ssn: true
};

var _vehicleLoanOptions = {
  accountNumber: true,
  loanNumber: true
};

var _consumerLoanOptions = {
  accountNumber: true,
  transactionNumber: true
};

var _cardOptions = {
  accountNumber: true,
  cardNumber: true
};

var _checkingOptions = {
  accountNumber: true,
  billingAddress: true
};

var _moneyTransOptions = {
  accountNumber: true,
  transactionNumber: true
};

var _debtSettlementOptions = {
  accountNumber: true,
  billingAddress: true
};

var _creditReportingOptions = {
  accountNumber: true,
  residenceDob: true,
  ssn: true
};

var _creditRepairingOptions = {
  accountNumber: true,
  billingAddress: true
};

var _debtOptions = {
  accountNumber: true,
  phoneNumber: true,
  loanNumber: true,
  lastSsn: true
};

function init() {
  companiesAutocomplete.init();
  internationalAddresses.init();

  // Show/hide follow-up info when certain radio buttons are selected
  $( '.cr-radios .radio input' ).on( 'change', function() {
    var $container = $( this ).parents( '.cr-radios' );
    $( this ).parent().addClass( 'selected' );
    $( '.cr-radios .radio input:not(:checked)' ).parent().removeClass( 'selected' );

    if ( $container ) {
      if ( $container.find( 'input.yes' ).is( ':checked' ) ) {
        $container.find( '.radio-follow-up .yes' ).show();
        $container.find( '.radio-follow-up .no' ).hide();
      } else {
        $container.find( '.radio-follow-up .yes' ).hide();
        $container.find( '.radio-follow-up .no' ).show();
      }
    }
  } );

  $( '#company-type-2-option' ).hide();

  // Whether to show/hide the second company.
  $( '.second-company-yes' ).on( 'change', function() {
    if ( $( '.second-company-yes' ).is( ':checked' ) ) {
      $( '#company-type-2' ).slideDown();
    }
  } );

  $( '.second-company-no' ).on( 'change', function() {
    if ( $( '.second-company-no' ).is( ':checked' ) ) {
      $( '#company-type-2' ).slideUp();
    }
  } );

  // Show/hide sections of Company Info.
  $( 'fieldset.additional-company' ).hide();

  $( '.add-company-yes' ).on( 'change', function() {
    $( '#additional-consumer-identity2' ).hide();
    $( '#additional-consumer-identity3' ).hide();

    if ( $( '.add-company-yes' ).is( ':checked' ) ) {
      $( 'fieldset.additional-company' ).slideDown( 400 );
      // Hide company name initially.
      $( 'fieldset.additional-company.company-name-fieldset-3' ).hide();

      $( '#additional-consumer-identity' ).val( 'Select one...' );

      $( '#additional-consumer-identity' ).on( 'change', function() {
        // Hide company name initially.
        $( 'fieldset.additional-company.company-name-fieldset-3' ).hide();
        $( '#additional-consumer-identity2' ).hide();
        $( '#additional-consumer-identity3' ).hide();
        $( '#additional-consumer-identity2' ).val( 'Select sub-product...' );
        $( '#additional-consumer-identity3' ).val( 'Select sub-product...' );
        $( '#company-type-3 .identify-product-options' ).hide();

        var product = document.querySelector( '#additional-consumer-identity' ).value;

        $( '#additional-consumer-identity2' ).on( 'change', function(){
          _showAddCompany( product );
        } );
        $( '#additional-consumer-identity3' ).on( 'change', function(){
          _showAddCompany( product );
        } );

        if ( product === 'Select one...' ) {
          $( 'fieldset.additional-company.company-name-fieldset-3' ).slideUp( 400 );
        } else {

          if ( product === 'credit_reporting' ) {
            $( '#additional-consumer-identity3' ).hide();
            $( '#additional-consumer-identity2' ).show();
          } else if ( product === 'money_trans' ) {
            $( '#additional-consumer-identity2' ).hide();
            $( '#additional-consumer-identity3' ).show();
          } else {
            _showAddCompany( product );
          }
        }
      } );
    }
  } );

  function _showAddCompany( product ) {
    $( 'fieldset.additional-company.company-name-fieldset-3' ).slideDown( 400 );
    $( '#company3-forward' ).prop( 'checked', false );
    $( '#forward-company3' ).hide();

    var addCompSel = '#company-type-3 .identify-product-options';
    var addCompOptions = document.querySelector( addCompSel );

    var $productOption;

    switch ( product ) {
      case 'mortgage':
        addCompOptions.innerHTML = identifyOptionsHandlebars( _mortgageOptions );
      break;

      case 'student_loan':
        addCompOptions.innerHTML = identifyOptionsHandlebars( _studentLoanOptions );
      break;

      case 'vehicle_loan':
        addCompOptions.innerHTML = identifyOptionsHandlebars( _vehicleLoanOptions );
      break;

      case 'consumer_loan':
        addCompOptions.innerHTML = identifyOptionsHandlebars( _consumerLoanOptions );
      break;

      case 'card':
        addCompOptions.innerHTML = identifyOptionsHandlebars( _cardOptions );
      break;

      case 'checking':
        addCompOptions.innerHTML = identifyOptionsHandlebars( _checkingOptions );
      break;

      case 'money_trans':
        var subproduct = document.querySelector( '#additional-consumer-identity3' ).value;
        if ( subproduct === 'debt-settlement' ) {
          addCompOptions.innerHTML = identifyOptionsHandlebars( _debtSettlementOptions );
        } else {
          addCompOptions.innerHTML = identifyOptionsHandlebars( _moneyTransOptions );
        }
      break;

      case 'credit_reporting':
        var subproduct = document.querySelector( '#additional-consumer-identity2' ).value;
        if ( subproduct === 'credit-reporting' ) {
          addCompOptions.innerHTML = identifyOptionsHandlebars( _creditReportingOptions );
        } else {
          addCompOptions.innerHTML = identifyOptionsHandlebars( _creditRepairingOptions );
        }
      break;

      case 'debt':
        addCompOptions.innerHTML = identifyOptionsHandlebars( _debtOptions );
      break;
    }

    _initOptionDetails( addCompOptions );
  }

  function _initOptionDetails( elem ) {
    $( elem ).hide();
    $( elem ).find( '.identify-account' ).on( 'change', function() {
      if ( $( '.identification-type' ).is( ':checked' ) ) {
        internationalAddresses.initOptions( this );
      }
    } );
  }

  $( '.add-company-no' ).on( 'change', function(){
    if ( $( '.add-company-no' ).is( ':checked' ) ) {
      $( 'fieldset.additional-company' ).slideUp( 400 );
      $( '#company-type-3 .identify-product-options' ).slideUp( 400 );
    }
  } );

  // Show/hide helper text when consumer chooses "I want a response from this company.
  $( 'fieldset.identify-product-options' ).hide();
  $( '.company-1-checkbox' ).hide();
  $( '#forward-company2' ).hide();
  $( '#forward-company3' ).hide();

  $( '#company2-forward' ).on( 'change', function() {
    if ( $( '#company2-forward' ).is( ':checked' ) ) {
      $( '#forward-company2' ).slideDown( 400 );
      $( '#company-type-2 .identify-product-options' ).slideDown( 400 );
    } else {
      $( '#forward-company2' ).slideUp( 400 );
      $( '#company-type-2 .identify-product-options' ).slideUp( 400 );
    }
  } );

  $( '#company3-forward' ).on( 'change', function() {
    if ( $( '#company3-forward' ).is( ':checked' ) ) {
      $( '#forward-company3' ).slideDown( 400 );
      $( '#company-type-3 .identify-product-options' ).slideDown( 400 );
    } else {
      $( '#forward-company3' ).slideUp(400);
      $( '#company-type-3 .identify-product-options' ).slideUp( 400 );
    }
  } );

  function _getSubproduct( subproduct ) {
    var subProductQ = '';
    switch ( subproduct ) {
      case 'payday-loan':
        subProductQ = 'Payday loan';
        break;
      case 'pawn-loan':
        subProductQ = 'Pawn loan';
        break;
      case 'title-loan':
        subProductQ = 'Title loan';
        break;
      case 'installment-loan':
        subProductQ = 'Installment loan';
        break;
      case 'personal-line-of-credit':
        subProductQ = 'Personal line of credit';
        break;
      case 'checking-account':
        subProductQ = 'Checking account';
        break;
      case 'savings-account':
        subProductQ = 'Savings account';
        break;
      case 'certificate-of-deposit':
        subProductQ = 'Certificate of deposit';
        break;
      case 'other-bank-product-or-service':
        subProductQ = 'Other bank product or service';
        break;
    }

    return subProductQ;
  }

  function _showSecondCompanyQuestion( product, subproduct, issue ) {
    var comp1Sel = '#company-type-1 .identify-product-options';
    var comp1Options = document.querySelector( comp1Sel );

    var comp2Sel = '#company-type-2 .identify-product-options';
    var comp2Options = document.querySelector( comp2Sel );

    var secondCompanyTitle = '';
    var secondCompanyOptions = {};
    switch ( product ) {
      case 'mortgage':
        secondCompanyTitle = 'Mortgage company';
        secondCompanyOptions = _mortgageOptions;
        break;
      case 'consumer_loan':
        secondCompanyTitle = _getSubproduct( subproduct );
        secondCompanyOptions = _consumerLoanOptions;
        break;
      case 'student_loan':
        secondCompanyTitle = 'Student loan company';
        secondCompanyOptions = _studentLoanOptions;
        break;
      case 'vehicle_loan':
        secondCompanyTitle = 'Vehicle loan company';
        secondCompanyOptions = _vehicleLoanOptions;
        break;
      case 'card':
        secondCompanyTitle = 'Credit card company';
        secondCompanyOptions = _cardOptions;
        break;
      case 'checking':
        secondCompanyTitle = _getSubproduct( subproduct );
        secondCompanyOptions = _checkingOptions;
        break;
    }

    if ( issue === 'debt_collection' ) {
      $( '#company-intro-1' ).text( 'Debt collection company' );
      $( '#company-type-1-product' ).text( 'debt collection company' );
    } else if ( issue === 'credit_reporting' ) {
      $( '#company-intro-1' ).text( 'Credit reporting company' );
      $( '#company-type-1-product' ).text( 'credit reporting company' );
   }

    $( '#company-type-1' ).show();
    $( '#company-type-2-option_header' ).text( 'Does the complaint also involve the ' + secondCompanyTitle.toLowerCase() + '?' );
    $( '#company-intro-2' ).text( secondCompanyTitle );
    $( '.company-2-checkbox' ).hide();
    $( '.company-2-checkbox input' ).prop( 'checked', true );
    $( '#forward-company2' ).show();
    $( '#company-type-2-option' ).show();
    comp1Options.innerHTML = identifyOptionsHandlebars( _debtOptions );
    comp2Options.innerHTML = identifyOptionsHandlebars( secondCompanyOptions );
    $( '#company-type-1-subproduct' ).text( secondCompanyTitle.toLowerCase() );
    $( '#company-type-1-intro-text' ).show();
  }

  // Show/hide product identification options.
  $( 'fieldset.identify-options' ).hide();
  $( '.company_verification_fieldset' ).hide();

  if ( !window.env ) {
    setTimeout( function() {
      var product = webStorageProxy.getItem( 'product_selected', localStorage );
      var subproduct = webStorageProxy.getItem( 'subproduct_selected', localStorage );
      var issue = webStorageProxy.getItem( 'issue_selected', localStorage );

      var comp1Sel = '#company-type-1 .identify-product-options';
      var comp1Options = document.querySelector( comp1Sel );

      var comp2Sel = '#company-type-2 .identify-product-options';
      var comp2Options = document.querySelector( comp2Sel );

      $( '#company-type-1 .identify-product-options' ).hide();
      $( '#company-type-1-intro-text' ).hide();
      $( '#company-type-2' ).hide();
      $( '#company-type-2 .identify-product-options' ).hide();
      $( '.company-2-checkbox' ).show();

      if ( product === 'mortgage' ) {
        $( '#company-intro-1' ).text( 'Mortgage company' );
        $( '#company-type-1' ).show();
        comp1Options.innerHTML = identifyOptionsHandlebars( _mortgageOptions );
        if ( issue === 'debt_collection' || issue === 'credit_reporting' ) {
          _showSecondCompanyQuestion( product, subproduct, issue );
        }
      } else if ( product === 'credit_reporting' ) {
        if ( subproduct === 'credit-reporting' ) {
          $( '#company-intro-1' ).text( 'Credit reporting company' );
          $( '#company-type-1' ).show();
          comp1Options.innerHTML = identifyOptionsHandlebars( _creditReportingOptions );
        } else if ( subproduct === 'credit-repair' ) {
          $( '#company-intro-1' ).text( 'Credit repair company' );
          $( '#company-type-1' ).show();
          comp1Options.innerHTML = identifyOptionsHandlebars( _creditRepairingOptions );
        }
      } else if ( product === 'card' ) {
        $( '#company-intro-1' ).text( 'Company information' );
        $( '#company-type-1' ).show();
        comp1Options.innerHTML = identifyOptionsHandlebars( _cardOptions );
        if ( subproduct === 'credit-card' &&
             ( issue === 'debt_collection' || issue === 'credit_reporting' ) ) {
          _showSecondCompanyQuestion( product, subproduct, issue );
        }
      } else if ( product === 'checking' ) {
        $( '#company-intro-1' ).text( 'Company information' );
        $( '#company-type-1' ).show();
        comp1Options.innerHTML = identifyOptionsHandlebars( _checkingOptions );
        if ( issue === 'debt_collection' || issue === 'credit_reporting' ) {
          _showSecondCompanyQuestion( product, subproduct, issue );
        }
      } else if ( product === 'vehicle_loan' ) {
        $( '#company-intro-1' ).text( 'Vehicle loan company' );
        $( '#company-type-1' ).show();
        comp1Options.innerHTML = identifyOptionsHandlebars( _vehicleLoanOptions );
        if ( issue === 'debt_collection' || issue === 'credit_reporting' ) {
          _showSecondCompanyQuestion( product, subproduct, issue );
        }
      } else if ( product === 'student_loan' ) {
        $( '#company-intro-1' ).text( 'Student loan company' );
        $( '#company-type-1' ).show();
        comp1Options.innerHTML = identifyOptionsHandlebars( _studentLoanOptions );
        if ( issue === 'debt_collection' || issue === 'credit_reporting' ) {
          _showSecondCompanyQuestion( product, subproduct, issue );
        }
      } else if ( product === 'consumer_loan' ) {
        $( '#company-intro-1' ).text( 'Company information' );
        $( '#company-type-1' ).show();
        comp1Options.innerHTML = identifyOptionsHandlebars( _consumerLoanOptions );
        if ( issue === 'debt_collection' || issue === 'credit_reporting' ) {
          _showSecondCompanyQuestion( product, subproduct, issue );
        }
      } else if ( product === 'money_trans' ) {
        $( '#company-intro-1' ).text( 'Company information' );
        $( '#company-type-1' ).show();
        comp1Options.innerHTML = identifyOptionsHandlebars( _moneyTransOptions );
        if ( subproduct === 'debt-settlement' ) {
          comp1Options.innerHTML = identifyOptionsHandlebars( _debtSettlementOptions );
        }
      } else if ( product === 'debt' ) {
        $( '#company-intro-1' ).text( 'Debt collection company' );
        $( '#company-type-1' ).show();
        comp1Options.innerHTML = identifyOptionsHandlebars( _debtOptions );
        if ( subproduct === 'mortgage-debt-collection' ) {
          $( '#company-intro-2' ).text( 'Mortgage company' );
          $( '#company-type-2' ).show();
          comp2Options.innerHTML = identifyOptionsHandlebars( _mortgageOptions );
        } else if ( subproduct === 'credit-card-debt-collection' ) {
          $( '#company-intro-2' ).text( 'Credit card company' );
          $( '#company-type-2' ).show();
          comp2Options.innerHTML = identifyOptionsHandlebars( _cardOptions );
        } else if ( subproduct === 'medical-debt-collection' ) {
          $( '#company-intro-2' ).text( 'Company information' );
          $( '#company-type-2' ).show();
        } else if ( subproduct === 'payday-loan-debt-collection' ) {
          $( '#company-intro-2' ).text( 'Payday company' );
          $( '#company-type-2' ).show();
          comp2Options.innerHTML = identifyOptionsHandlebars( _consumerLoanOptions );
        } else if ( subproduct === 'auto-debt-collection' ) {
          $( '#company-intro-2' ).text( 'Vehicle loan company' );
          $( '#company-type-2' ).show();
          comp2Options.innerHTML = identifyOptionsHandlebars( _vehicleLoanOptions );
        } else if ( subproduct === 'federal-student-debt-collection' ) {
          $( '#company-intro-2' ).text( 'Student loan company' );
          $( '#company-type-2' ).show();
          comp2Options.innerHTML = identifyOptionsHandlebars( _studentLoanOptions );
        } else if ( subproduct === 'non-federal-student-debt-collection' ) {
          $( '#company-intro-2' ).text( 'Student loan company' );
          $( '#company-type-2' ).show();
          comp2Options.innerHTML = identifyOptionsHandlebars( _studentLoanOptions );
        } else if ( subproduct === 'other-debt-collection' ) {
          $( '#company-intro-2' ).text( 'Other company information' );
          $( '#company-type-2' ).show();
        }
      }

      _initOptionDetails( comp1Options );
      _initOptionDetails( comp2Options );
    }, 11 );
  }
  /*         var announceissue = localStorage.getItem("issue_selected").text()); */
  /*         alert(announceissue); */
  /*         $( '.select-product-or-issue' ).hide(); */
}

module.exports = {
  init: init
};
