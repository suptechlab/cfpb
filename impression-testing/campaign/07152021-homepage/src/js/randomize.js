var loadingTxt;
var button;
var taskInstructions;
var imageContainer;
var images;
var assignedImageIndex;
var savedImageIndex;

function pageLoaded() {
  taskInstructions = document.getElementById( 'task-instructions' );
  imageContainer = document.getElementById( 'images' );
  images = imageContainer.querySelectorAll( 'img' );
  assignedImageIndex = getRandomInt( images.length );
  savedImageIndex = sessionStorage.getItem( 'savedImageIndex' );
  currentImage = savedImageIndex ? images[savedImageIndex] : images[assignedImageIndex];

  button = document.getElementById( 'start' );
  loadingTxt = document.getElementById( 'loading-txt' );
  hide( loadingTxt );

  if ( savedImageIndex ) {
    hide( button );
    hide( taskInstructions );
    show( currentImage );
  } else {
    firstLoad();
  }
}

function getRandomInt( max ) {
  return Math.floor(Math.random() * max);
}

function saveImageIndexToLocalStorage( index ) {
  sessionStorage.setItem( 'savedImageIndex', index );
}

function hide( elem ) {
    elem.style.display = 'none';
}

function show( elem ) {
    elem.style.display = 'block';
}

function firstLoad() {
  saveImageIndexToLocalStorage( assignedImageIndex );
  show( button );

  button.addEventListener( 'click', function() {
    hide( button );
    show( currentImage );
    setTimeout( function() {
      hide( currentImage );
      show( taskInstructions );
    },  15000 );
  } );
}

window.addEventListener( 'load', pageLoaded );
