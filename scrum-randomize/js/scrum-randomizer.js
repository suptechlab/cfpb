/**
 * Convert URL parameter key/values into a JavaScript object.
 * @return {Object} An object of key/value URL parameter pairs.
 */
function getURLParams() {
  var search = location.search.substring(1);
  if ( search === '' ) return {};
  return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}

/**
 * @return {Array} A list of team members from the "team" parameter in the URL.
 */
function getTeamFromURL() {
  var params = getURLParams()
  if ( typeof params.team === 'undefined' ) {
    return [];
  }
  
  return params.team.split(',');
}

/**
 * Build the team view from the URL.
 */
function buildTeamView() {
  teamViewDom.style.display = 'block';
  var teamMember;
  var generateOrderBtn = teamViewDom.querySelector( 'button' );
  var teamCheckboxListDom = teamViewDom.querySelector( 'ul' );

  for ( var i = 0, len = team.length; i < len; i++ ) {
    teamMember = team[i];
    
    // Create list item
    var listItemElement = document.createElement( 'li' );
    listItemElement.innerHTML = '<label><input type="checkbox" name="team" value="' + 
                                teamMember + '" checked>' + teamMember + '</label>';

    teamCheckboxListDom.appendChild( listItemElement );
  }

  generateOrderBtn.addEventListener( 'click', showListView );
}

/**
 * Build the list view from the present team members.
 */
function buildListView() {
  var teamListDom = listViewDom.querySelector( 'ol' );
  teamListDom.innerHTML = '';

  var dateText = ( today.getMonth() + 1 ) + '/' + today.getDate() + '/' + today.getFullYear();
  var dateTodayDom = document.querySelector( '#date-today' );
  dateTodayDom.innerHTML = dateText;

  var selectedTeamMembers = teamViewDom.querySelectorAll( 'li input' );

  var selectedTeamList = [];
  var selectedTeamMemberCheckbox;
  for ( var i = 0, len = selectedTeamMembers.length; i < len; i++ ) {
    selectedTeamMemberCheckbox = selectedTeamMembers[i];
    if ( selectedTeamMemberCheckbox.checked ) {
      selectedTeamList.push( selectedTeamMembers[i].value );
    }
  }
  
  selectedTeamList = shuffle( selectedTeamList );
  var teamMember;
  for ( var i = 0, len = selectedTeamList.length; i < len; i++ ) {
    teamMember = selectedTeamList[i];
    //var content = orderTeam( teamMember );
    var listItemElement = document.createElement( 'li' );
    listItemElement.innerHTML = teamMember;
    teamListDom.appendChild( listItemElement );
  }
}

/**
 * Show the list view.
 */
function showListView() {
  buildListView();

  listViewDom.style.display = 'block';
}

/**
 * Fisher-Yates Shuffle
 * See https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param {Array} list to shuffle. 
 */
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

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

// Get today's date.
var today = new Date();

// Reference views.
var noticeViewDom = document.querySelector( '#notice-view' );
var teamViewDom = document.querySelector( '#team-view' );
var listViewDom = document.querySelector( '#list-view' );

// Hide the views initially.
teamViewDom.style.display = 'none';
listViewDom.style.display = 'none';

// Retrieve team from URL.
var team = getTeamFromURL();

if ( team.length < 1 ) {
  noticeViewDom.innerHTML = '<h2>No team members found!</h2>';
} else {
  noticeViewDom.style.display = 'none';

  // Build the team view.
  buildTeamView();
}
