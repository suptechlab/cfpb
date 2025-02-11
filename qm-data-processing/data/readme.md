readme.md
=========

This is the ./data dir readme.  This directory contains two directories; a) one for counties that represent rural or underserved by year and b) one for urban areas.  Collectively this data represents the back end data that is used to drive the Bureau's Qualified Mortgage tool.  

County
------
The _county_ directory contains sub-directories for years.  Each year the rural and underserved county list changes based on an updated cycle published by the [Consumer Finance Protection Bureau](http://www.cfpb.gov).  [The 2015 list is published here](http://www.consumerfinance.gov/blog/final-list-of-rural-or-underserved-counties-for-use-in-2015/).  This directory reformats this data into json objects so it can be used in the Bureau's [Qualified Mortgage Tool](yet to be published).  The list of counties here represent counties that are rural or underserved as described in the Bureau's rule.  For a complete method of how this list of counties are developed, see [some link](some link).  Generally speaking, addresses falling within the counties on this list are in rural areas.  


Urban Areas
-----------
The _uauc_ directory contains a set of geojson files, one for each state.  The files represent urban areas and urban clusters directly from the US Census.  The source of these data are from [the US Census TIGER line FTP site](ftp://ftp2.census.gov/geo/tiger/TIGER2015/UAC/).  The data is then post processed using the process in the [processing directory](./processing) in this repo.  