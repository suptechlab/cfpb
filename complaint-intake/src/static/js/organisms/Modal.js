var modalHandlebars = require( '../../tmpl/modal.handlebars' );

function Modal() {

  var BASE_CLASS = 'o-modal';

  var _dom;
  var _offsetDom;
  var _bgDom;
  var _closeBtnDom;

  function create( content ) {
    _dom = document.createElement( 'div' );
    _dom.innerHTML = modalHandlebars( {
      header: content.header,
      body: content.body,
      button: content.button
    } );
    var bodyDom = document.getElementsByTagName( 'body' )[0];
    var modalDom = bodyDom.appendChild( _dom );
    _offsetDom = modalDom.querySelector( '.' + BASE_CLASS + '_offset' );
    _bgDom = modalDom.querySelector( '.' + BASE_CLASS + '_bg' );
    _closeBtnDom = modalDom.querySelector( '.' + BASE_CLASS + '_close a' );

    return this;
  }

  function destroy() {
    _dom.parentNode.removeChild( _dom );

    return this;
  }

  function init() {
    _dom.addEventListener( 'mousedown', _modalClicked );

    return this;
  }

  function getDom() {
    return {
      container: _dom
    }
  }

  function _modalClicked( evt ) {
    var target = evt.target;
    if ( target === _offsetDom ||
         target === _bgDom ||
         target === _closeBtnDom ) {
      // TODO: Update to remove jQuery.
      $( '.o-modal' ).animate( {
        opacity: 0
      }, 100, function() {
        destroy();
      } );
    }
  }

  this.create = create;
  this.destroy = destroy;
  this.init = init;
  this.getDom = getDom;

  return this;
}

module.exports = Modal;
