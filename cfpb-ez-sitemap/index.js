
console.log( 'Staring crawler...' );

const SitemapGenerator = require('sitemap-generator');
 

// create generator
const generator = SitemapGenerator('https://www.consumerfinance.gov/', {
  stripQuerystring: false
});
 
// register event listeners
generator.on('done', () => {
  // sitemaps created
});

generator.on('add', ( url ) => {
  console.log( url );
});
 
generator.on('error', ( err ) => {
  console.log( err );
});
 
generator.on('ignore', ( url ) => {
  console.log( 'IGNORED ' + url );
});
 
console.log( 'Staring crawler...' );

// start the crawler
generator.start();
