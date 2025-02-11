'use strict';

var chartBuilder = require( 'cfpb-chart-builder' );

var data = [
  { date: '2009-01-01', amount: -40 },
  { date: '2009-02-01', amount: -38 },
  { date: '2009-03-01', amount: -35 },
  { date: '2009-04-01', amount: -31 },
  { date: '2009-05-01', amount: -33 },
  { date: '2009-06-01', amount: -25 },
  { date: '2009-07-01', amount: -22 },
  { date: '2009-08-01', amount: -16 },
  { date: '2009-09-01', amount: -12 },
  { date: '2009-10-01', amount: -9 },
  { date: '2009-11-01', amount: -5 },
  { date: '2009-12-01', amount: -1 },
  { date: '2010-01-01', amount: 4 },
  { date: '2010-02-01', amount: 10 },
  { date: '2010-03-01', amount: 12 },
  { date: '2010-04-01', amount: 9 },
  { date: '2010-05-01', amount: 15 },
  { date: '2010-06-01', amount: 26 },
  { date: '2010-07-01', amount: 28 },
  { date: '2010-08-01', amount: 16 },
  { date: '2010-09-01', amount: 12 },
  { date: '2010-10-01', amount: 9 },
  { date: '2010-11-01', amount: 5 },
  { date: '2010-12-01', amount: -1 },
  { date: '2011-01-01', amount: -4 },
  { date: '2011-02-01', amount: -3 },
  { date: '2011-03-01', amount: -12 },
  { date: '2011-04-01', amount: -15 },
  { date: '2011-05-01', amount: -21 },
  { date: '2011-06-01', amount: -25 },
  { date: '2011-07-01', amount: -22 },
  { date: '2011-08-01', amount: -16 },
  { date: '2011-09-01', amount: -12 },
  { date: '2011-10-01', amount: -9 },
  { date: '2011-11-01', amount: -5 },
  { date: '2011-12-01', amount: -1 },
  { date: '2012-01-01', amount: 4 },
  { date: '2012-02-01', amount: 10 },
  { date: '2012-03-01', amount: 12 },
  { date: '2012-04-01', amount: 9 },
  { date: '2012-05-01', amount: 15 },
  { date: '2012-06-01', amount: 26 },
  { date: '2012-07-01', amount: 28 },
  { date: '2012-08-01', amount: 16 },
  { date: '2012-09-01', amount: 12 },
  { date: '2012-10-01', amount: 9 },
  { date: '2012-11-01', amount: 5 },
  { date: '2012-12-01', amount: -1 },
  { date: '2013-01-01', amount: -4 },
  { date: '2013-02-01', amount: -3 },
  { date: '2013-03-01', amount: -12 },
  { date: '2013-04-01', amount: -15 },
  { date: '2013-05-01', amount: -21 },
  { date: '2013-06-01', amount: -25 },
  { date: '2013-07-01', amount: -22 },
  { date: '2013-08-01', amount: -16 },
  { date: '2013-09-01', amount: -12 },
  { date: '2013-10-01', amount: -9 },
  { date: '2013-11-01', amount: -5 },
  { date: '2013-12-01', amount: -1 },
  { date: '2014-01-01', amount: 4 },
  { date: '2014-02-01', amount: 10 },
  { date: '2014-03-01', amount: 12 },
  { date: '2014-04-01', amount: 9 },
  { date: '2014-05-01', amount: 15 },
  { date: '2014-06-01', amount: 26 },
  { date: '2014-07-01', amount: 28 },
  { date: '2014-08-01', amount: 16 },
  { date: '2014-09-01', amount: 12 },
  { date: '2014-10-01', amount: 9 },
  { date: '2014-11-01', amount: 5 },
  { date: '2014-12-01', amount: -1 },
];

var moreData = [
  { date: '2009-01-01', amount: 40 },
  { date: '2009-02-01', amount: 38 },
  { date: '2009-03-01', amount: 35 },
  { date: '2009-04-01', amount: 31 },
  { date: '2009-05-01', amount: 33 },
  { date: '2009-06-01', amount: 25 },
  { date: '2009-07-01', amount: 22 },
  { date: '2009-08-01', amount: 16 },
  { date: '2009-09-01', amount: 12 },
  { date: '2009-10-01', amount: 9 },
  { date: '2009-11-01', amount: 5 },
  { date: '2009-12-01', amount: 1 },
  { date: '2010-01-01', amount: 4 },
  { date: '2010-02-01', amount: 10 },
  { date: '2010-03-01', amount: 12 },
  { date: '2010-04-01', amount: 9 },
  { date: '2010-05-01', amount: 15 },
  { date: '2010-06-01', amount: 26 },
  { date: '2010-07-01', amount: 28 },
  { date: '2010-08-01', amount: 16 },
  { date: '2010-09-01', amount: 12 },
  { date: '2010-10-01', amount: 9 },
  { date: '2010-11-01', amount: 5 },
  { date: '2010-12-01', amount: 1 }
];

var tileData = [
  { state: 'AK', value: .82 },
  { state: 'AL', value: .77 },
  { state: 'AR', value: .65 },
  { state: 'AZ', value: .62 },
  { state: 'CA', value: .51 },
  { state: 'CO', value: .53 },
  { state: 'CT', value: .410 },
  { state: 'DC', value: .69 },
  { state: 'DE', value: .510 },
  { state: 'FL', value: .8 },
  { state: 'GA', value: .78 },
  { state: 'HI', value: .81 },
  { state: 'IA', value: .45 },
  { state: 'ID', value: .32 },
  { state: 'IL', value: .36 },
  { state: 'IN', value: .46 },
  { state: 'KS', value: .64 },
  { state: 'KY', value: .56 },
  { state: 'LA', value: .75 },
  { state: 'MA', value: .310 },
  { state: 'MD', value: .59 },
  { state: 'ME', value: .111 },
  { state: 'MI', value: .37 },
  { state: 'MN', value: .35 },
  { state: 'MO', value: .55 },
  { state: 'MS', value: .76 },
  { state: 'MT', value: .33 },
  { state: 'NC', value: .67 },
  { state: 'ND', value: .34 },
  { state: 'NE', value: .54 },
  { state: 'NH', value: .211 },
  { state: 'NJ', value: .49 },
  { state: 'NM', value: .63 },
  { state: 'NV', value: .42 },
  { state: 'NY', value: .39 },
  { state: 'OH', value: .47 },
  { state: 'OK', value: .74 },
  { state: 'OR', value: .41 },
  { state: 'PA', value: .48 },
  { state: 'RI', value: .411 },
  { state: 'SC', value: .33 },
  { state: 'SD', value: .44 },
  { state: 'TN', value: .66 },
  { state: 'TX', value: .84 },
  { state: 'UT', value: .52 },
  { state: 'VA', value: .58 },
  { state: 'VT', value: .210 },
  { state: 'WA', value: .31 },
  { state: 'WI', value: .26 },
  { state: 'WV', value: .57 },
  { state: 'WY', value: .43 }
];

// ***----***
// First bar chart
// ***----***

var properties = {
  data: data,
  selector: '#bars'
};

var someBars = new chartBuilder.barChart( properties );

var options = {
  baseWidth: 600,
  baseHeight: 400,
  paddingDecimal: .1,
  margin: {
    top: 20, right: 20, bottom: 70, left: 100
  }
}

var barGraphAlpha = someBars.drawGraph( options );


// ***----***
// Second bar chart
// ***----***

var moreProperties = {
  data: moreData,
  selector: '#moreBars'
};

var morebars = new chartBuilder.barChart( moreProperties );

var moreOptions = {
  baseWidth: 600,
  baseHeight: 400,
  paddingDecimal: .1,
  margin: {
    top: 20, right: 20, bottom: 70, left: 100
  }
}

var barGraphBeta = morebars.drawGraph( moreOptions );

// ***----***
// tileMap
// ***----***

var tileMapProps = {
  data: tileData,
  selector: '#tileMap'
}

var tileMap = new chartBuilder.tileMap( tileMapProps );

var tileMapOptions = {
  baseWidth: 650,
  baseHeight: 650,
  paddingDecimal: .1,
  margin: {
    top: 20, right: 20, bottom: 20, left: 20
  }
}

var tileMapChart = tileMap.drawGraph( tileMapOptions );


