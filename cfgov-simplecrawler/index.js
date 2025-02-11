'use strict';

const createCrawler = require( './src/crawler' ).create;
const fileExists = require( './src/utils/file-exists' );

const crawlerOptions = {
  URL: 'https://www.consumerfinance.gov/'
}

var queueCheck = 100;

var crawler = createCrawler( crawlerOptions );

// FOR DEVELOPMENT ONLY: 
// Disable discovery during development
// crawler.discoverResources = false;

// FOR DEVELOPMENT ONLY: Emit all events!
var originalEmit = crawler.emit;
crawler.emit = function(evtName, queueItem) {
    crawler.queue.countItems({ fetched: true }, function(err, completeCount) {
        if (err) {
            throw err;
        }

        crawler.queue.getLength(function(err, length) {
            if (err) {
                throw err;
            }

            console.log("fetched %d of %d — %d open requests, %d open listeners",
                completeCount,
                length,
                crawler._openRequests.length,
                crawler._openListeners);
        });
    });

    console.log(evtName, queueItem ? queueItem.url ? queueItem.url : queueItem : null);
    originalEmit.apply(crawler, arguments);
};

// Testing frosting
crawler.on( 'fetchcomplete', ( queueItem, responseBuffer, response ) => {

  crawler.queue.countItems( { fetched: true }, function( err, count ) {
    if ( err ) {
        throw err;
    }

    if ( count > queueCheck ) {
      console.log( 'FREEZING THE QUEUE!' );
      crawler.queue.freeze( 'mysavedqueue.json', () => {
        
      } );
      queueCheck += 100;
    }

  } );

} );


if ( fileExists( './mysavedqueue.json' ) ) {
  crawler.queue.defrost( './mysavedqueue.json', () => {
    crawler.queue.countItems( { fetched: true }, function( err, count ) {
      if ( count > 0 ) {
        queueCheck = count + 100;
      }
      console.log( 'Starting fetch/queue' + count + ', ' + queueCheck );
    } );
  } );
}

// Initialize the crawler
let crawlerPromise = crawler.init();
crawlerPromise.then( function( result ) {
    let queueUrls = crawler.addKnownUrls( crawler );
    queueUrls.then( function( result ) {
      crawler.start();
    }, function( err ) {
      console.log( err );
    } );
  }, function( err ) {
    console.log( err );
  } );

// Start the crawler
// crawler.start();


