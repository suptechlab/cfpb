'use strict';

const fs = require( 'fs' );
const SimpleCrawler = require( 'simplecrawler' );
const queue = SimpleCrawler.queue;
const sqlite3 = require( 'sqlite3' ).verbose();

// Connect database
let db = new sqlite3.Database( './db/cfpb-content.db', ( err ) => {
  if ( !err ) {
    console.log( 'Database connected!' );
  }
} );

/**
 * Update database
 */
function _updateDatabase( sql, params ) {
  db.run( sql, params, ( err, rows ) => {
    if ( err ) throw err;
  } );
}

/**
 * Create sql for db updates
 */
function _createSqlFromContent( url, content ) {
  let itemMap = [ 'url', 'content' ];
  var sql;
  var params = [];

  sql = 'INSERT OR REPLACE INTO cfpb_content ( url, content ) ';
  sql += 'values( ?, ? )';

  params[0] = url;
  params[1] = content;

  return {
    sql: sql,
    params: params
  };

}


/**
 * Add site index.
 * @param {string} siteCrawler
 */
function _addSiteIndexEvents( crawler ) {
  let itemMap = [ 'host', 'path', 'port', 'protocol', 'uriPath', 'url', 'depth',
    'fetched', 'status', 'stateData', 'id', 'components', 'hasWordPressContent',
    'contentLinks', 'pageHash' ];

  crawler.on( 'fetchcomplete', function( queueItem, responseBuffer, response ) {
    const stateData = queueItem.stateData;
    const contentType = ( stateData && stateData.contentType ) || '';
    const url = queueItem.url;
    var queueObj = queueItem;

    if ( contentType.indexOf( 'text/html' ) > -1
         && queueItem.host === crawler.host ) {

      var sqlData = _createSqlFromContent( queueItem.url, responseBuffer.toString() );
      _updateDatabase( sqlData.sql, sqlData.params );

    }

    // Save a back of the queue JSON. Backups are good.
    if ( queueItem.id > 0 && queueItem.id % 500 === 0 ) {
      fs.writeFile( 'backup-mysavedqueue.json',
                    JSON.stringify( crawler.queue ),
                    function(){} );
    }


  } );

  /***
   * FETCH CONDITIONS
   ***/

  // Don't fetch URLs that contain /external-site/
  crawler.addFetchCondition( function( queueItem, referrerQueueItem, callback ) {
    callback( null, !queueItem.path.match( /(\/external-site\/)/i ) );
  });

  // Don't fetch URLs that match these file extensions
  crawler.addFetchCondition( ( queueItem, referrerQueueItem, callback ) => {
    const downloadRegex =
    /\.(png|jpg|jpeg|gif|ico|css|js|csv|doc|docx|svg|pdf|xls|json|ttf|xml|woff|eot|zip|wav)/i;
    callback( null, !queueItem.url.match( downloadRegex ) );
  } );

  // Don't fetch URLs with pagination in the querystring
  crawler.addFetchCondition( function( queueItem, referrerQueueItem, callback ) {
    callback( null, !queueItem.path.match( /(page=)/ ) );
  });

  // Don't fetch certain eregs page
  crawler.addFetchCondition( function( queueItem, referrerQueueItem, callback ) {
    var fetch = true;
    var path = queueItem.path;
    var eregs = path.indexOf( 'eregulations' ) > -1;
    var dash = path.indexOf( '-' ) > -1;
    var depth = path.match( /\//gi ) && path.match( /\//gi ).length > 2;
    if ( eregs && ( dash || depth ) ) {
      fetch = false;
    }

    callback( null, fetch );
  });

  // Don't fetch /askcfpb/ urls
  crawler.addFetchCondition( function( queueItem, referrerQueueItem, callback ) {
    callback( null, !queueItem.path.match( /(\/askcfpb\/)/ ) );
  });

  // Don't fetch /ask-cfpb/slug/ urls
  crawler.addFetchCondition( function( queueItem, referrerQueueItem, callback ) {
    var path = queueItem.path;
    var check = path.indexOf( 'ask-cfpb' ) > -1 && path.indexOf( 'slug' ) > -1;
    callback( null, !check );
  });  


  // Log errors
  crawler.on( 'fetchclienterror', function( queueItem, error ) {
    console.log( 'fetch client error:' + error );
  } );

  crawler.on( 'complete', function() {
    // Close the database connection
    db.close( ( err ) => {
      if ( err ) {
        console.error( err.message );
      }
      console.log( 'Closed the database connection.' );
    });

    // Save the queue file
    crawler.queue.freeze( 'mysavedqueue.json', () => {
      
    } );

    // Copy queue file for backup purposes
    // fs.copyFile( 'mysavedqueue.json', 'backup-mysavedqueue.json', (err) => {
    //   if (err) throw err;
    // });

    console.log( 'Index successfully completed.' );
  } );

  return crawler;
};

/**
 * Import known URLs for crawling
 */
function _addKnownUrls( crawler ) {
  return new Promise( function( resolve, reject ) {
    let sql = 'SELECT url FROM cfpb_content';
    db.each( sql, function( err, row ) {
      if ( err ) {
        reject( err );
      } else {
        crawler.queueURL( row.url, undefined, true );
        console.log( 'Added known URL: ' + row.url );        
      }
    } );
    resolve();
  } );
}

function _init ( ) {
  return new Promise( function( resolve, reject ) {
    // create table if it's not there
    const tblSql = 'create table if not exists cfpb_content ( url text primary key, content text )';
    db.run( tblSql, [], ( err ) => {
      if ( err ) {
        reject( err );
      } else {
        resolve();
      }
    } );
  } );
};

/**
 * Create site crawler.
 * @param {object} siteLocation
 */
function create ( options={} ) {
  const crawler = SimpleCrawler( options.URL );
  crawler.init = _init;
  crawler.addKnownUrls = _addKnownUrls;

  const crawlerDefaults = {
    host: 'www.consumerfinance.gov',
    interval: 3000,
    maxConcurrency: 5,
    filterByDomain: true,
    parseHTMLComments: false,
    parseScriptTags: false,
    respectRobotsTxt: false
  };

  Object.assign( crawler, crawlerDefaults, options );

  _addSiteIndexEvents( crawler );

  return crawler;
};

module.exports = { create };