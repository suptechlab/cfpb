'use strict';

const fs = require( 'fs' );

function createSitemap( arr ) {
  var sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  arr.forEach( function( elem ) {
    sitemap += `
    <url>
      <loc>${ elem.url }</loc>
    </url>`;
  } );
  sitemap += `
</urlset>`;

  return sitemap;
}

module.exports = createSitemap;