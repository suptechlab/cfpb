'use strict';

var addressHandlebars = require( '../../tmpl/address.handlebars' );

var _addressContainerDom;
var _addressMap = {};
var _countryDropdownDom;

function init() {
  // Handle international addresses.
  var addressTemplates = document.querySelectorAll( '.address-template' );

  for ( var i = 0, len = addressTemplates.length; i < len; i++ ) {
    _addressContainerDom = addressTemplates[i];
    _initAddress( _addressContainerDom, i );
  }

  $( '.identify-account' ).on( 'change', function() {
    if ( $( '.identification-type' ).is( ':checked' ) ) {
      initOptions( this );
    }
  } );
}

function initOptions( context ) {
  var identifytype = $( context ).attr( 'value' );
  var companytype = $( context ).closest( 'fieldset' ).attr( 'id' );
  $( 'fieldset.identify-options.active-' + companytype ).hide();
  $( '.identify-account label.active' ).removeClass( 'active' );
  $( '#fieldset_repository fieldset.' + identifytype )
    .clone().appendTo( $( context ).closest( 'fieldset' ) )
      .slideDown( 'fast', function() {
        var address = this.querySelector( '.address-template' );
        if ( address ) {
          var id = address.id.substring( address.id.length-1 );
          _initAddress( address, id );
        }
      } ).addClass( 'active-' + companytype );
}

function _initAddress( addressDom, id ) {
  var label = addressDom.getAttribute( 'data-label' );
  if ( label !== 'Company address' && label !== 'Business address' ) {
    addressDom.innerHTML = addressHandlebars( { id: id, label: label, addOptionalText: true, addressIsOptional: false  } );
  } else if ( label === 'Business address' ) {
    addressDom.innerHTML = addressHandlebars( { id: id, label: label, addOptionalText: true, addressIsOptional: true } );
  } else {
    addressDom.innerHTML = addressHandlebars( { id: id, label: label, addOptionalText: false, addressIsOptional: false  } );
  }
  _countryDropdownDom = addressDom.querySelector( '#address-country-' + id );
  _addressMap[_countryDropdownDom.id] = addressDom;
  _countryDropdownDom.addEventListener( 'change', _countryChanged );
}

function _countryChanged( evt ) {
  var tmp = evt.target.id.split( '-' );
  var label = evt.target.getAttribute( 'data-label' );
  var id = tmp[tmp.length-1];
  var opts = { id: id, label: label };
  opts[ 'country' + evt.target.value ] = true;
  // 100 is the value code for the USA.
  if ( evt.target.value !== '100' ) {
    opts.isInternational = true;
  }
  if ( label !== 'Company address' ) {
    opts.addOptionalText = true;
  }
  if ( label === 'Business address' ) {
    opts.addressIsOptional = true;
  }
  _addressContainerDom = _addressMap[evt.target.id];
  _countryDropdownDom = _addressContainerDom.querySelector( '#address-country-' + id );
  _countryDropdownDom.removeEventListener( 'change', _countryChanged );
  _addressContainerDom.innerHTML = addressHandlebars( opts );
  _countryDropdownDom = _addressContainerDom.querySelector( '#address-country-' + id );
  _countryDropdownDom.addEventListener( 'change', _countryChanged );
}

module.exports = {
  init: init,
  initOptions: initOptions
};
