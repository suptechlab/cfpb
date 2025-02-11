function shuffle( array ) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getNumberArray( num ) {
    var arr = [];
    for ( var i = 0; i < num; i++ ){
        arr.push( i );
    }
    return arr;
}

function hide( elem ) {
    elem.style.display = 'none';
}

function show( elem ) {
    elem.style.display = 'block';
}

function init() {
    var overlay = document.getElementById( 'overlay' );
    var pageNumber = parseInt( overlay.dataset.pageNumber );
    var button = document.getElementById( 'start' );
    var taskInstructions = document.getElementById( 'task-instructions' );
    var imageContainer = document.getElementById( 'images' );
    var images = imageContainer.querySelectorAll( 'img' );
    var imageCount = images.length;
    var order = localStorage.getItem('imageOrder');

    if ( order ) {
        order = JSON.parse( order );
    } else {
        var arr = getNumberArray( imageCount );
        order = shuffle( arr );
        localStorage.setItem('imageOrder', JSON.stringify( order ) );
    }

    console.log( order );

    button.addEventListener( 'click', function() {
        var idx = order[ pageNumber ];
        var currentImage = images[ idx ];
        hide( overlay );
        hide( button );
        show( currentImage );
        setTimeout( function() {
            overlay.style.display = 'block';
            hide( currentImage );
            show( overlay );
            show( taskInstructions );
        },  10000 );
    });

}

window.addEventListener( 'load', init );
