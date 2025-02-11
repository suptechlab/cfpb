
function init() {
    var button = document.getElementById( 'start' );
    var overlay = document.getElementById( 'overlay' );
    var message = document.getElementById( 'success-message' );
    button.addEventListener( 'click', function() {
        overlay.style.display = 'none';
        button.style.display = 'none';
        var hide = setTimeout( function() {
            overlay.style.display = 'block';
            message.style.display = 'block';
        }, 10000 );
    });
}

window.addEventListener( 'load', init );
