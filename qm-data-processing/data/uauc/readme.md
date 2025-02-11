readme.md
=========

This is the readme for the _uauc_ directory.  This directory contains geojson files of urban areas urban clusters directly from the US Census.  The source of these data are from [the US Census TIGER line FTP site](ftp://ftp2.census.gov/geo/tiger/TIGER2015/UAC/).  The data is then post processed using the process in the [processing directory](./processing) in this repo.  

This data was generated on October 26, 2015, and contains the following general processing notes;

- polygons in the source data was simplified by 10 meters in the google mercator (900913) projeciton;
- polygons were only selected if they fell entirely inside the state;
- all urban areas or urban clusters in the source data are represented in the output data


 

 
