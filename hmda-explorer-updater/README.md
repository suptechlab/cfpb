# hmda-explorer-updater

A suite of MongoDB and shell scripts to automate the updating of
[hmda-explorer](https://github.com/cfpb/hmda-explorer) when new HMDA data arrives.
They generate new JSON for the charts on the homepage and new TileMill map
layers to be uploaded to MapBox.com for the homepage's map.

These scripts assume you have:

- Access to a MongoDB server with a `hmda` db and `hmda_lar` collection
containing umpteen million HMDA LAR documents.
- A free [Census API key](http://api.census.gov/data/key_signup.html).
- GDAL, MongoDB, jq and iconv installed on a *nix machine.
- [TileMill](https://github.com/mapbox/tilemill) installed locally.

**Note:** These scripts will not do all the work for you. They just automate
some of the more tedious aspects (notably, the flattening of HMDA LAR data using
a series of MongoDB aggregations).

## Installation

- Clone this repo to your local machine.
- Install GDAL, MongoDB and jq. On Mac OS X you can do `brew update && brew install gdal jq mongodb`.
- Get a free [Census API key](http://api.census.gov/data/key_signup.html).
- Define the following environment variables:

```sh
export CENSUS_API_KEY=XXXXXXXXXXX
export MONGO_DEV_HOST=XXXXXXXXXXX
export MONGO_DEV_PORT=XXXXXXXXXXX
export MONGO_DEV_USERNAME=XXXXXXXXXXX
export MONGO_DEV_PASSWORD=XXXXXXXXXXX
```

For example:

```sh
export CENSUS_API_KEY=9b2f40923bd0b433fecd77406f5169r1h909sr2
export MONGO_DEV_HOST=123.45.67.89
export MONGO_DEV_PORT=1234
export MONGO_DEV_USERNAME=gracehopper
export MONGO_DEV_PASSWORD=p@ssw0rd
```

## Get the Population updates from the Census

- Go to the [Census Fact Finder site](http://factfinder.census.gov/bkmk/table/1.0/en/PEP/2015/PEPANNRES/0100000US.05000.004)
  - You may need to add/change geographies to get the current year's data
  - You may need to update the URL to get to the correct data set
- Click `download`
  - Choose `data and annotations in a single file`
- Save and unzip in the `input/census_data` directory

## Update the window of years
The original window for this repo was 2012-2014. The next update changed the window to 2013-2015. Here is a helpful checklist of place to make the changes
- [ ] `input/tilemill_projects/hmda_blank/project.mml`
- [ ] `input/tilemill_projects/hmda_p_o_y0_y1/project.mml`
- [ ] `input/tilemill_projects/hmda_p_o_y1_y2/project.mml`
- [ ] `input/tilemill_projects/hmda_r_o_y0_y1/project.mml`
- [ ] `input/tilemill_projects/hmda_r_o_y1_y2/project.mml`
- [ ] `mongo-scripts/aggregate_charts.js`
- [ ] `mongo-scripts/hmda_group_by_county-compressed.js`
- [ ] `mongo-scripts/hmda_group_by_county.js`
- [ ] `mongo-scripts/hmda_group_by_state-compressed.js`
- [ ] `mongo-scripts/hmda_group_by_state.js`
- [ ] `update_hmda_explorer.sh`

## Run the update

```sh
./update_hmda_explorer.sh
```

Executing `update_hmda_explorer.sh` will connect to your MongoDB server, do a
bunch of stuff, and eventually generate two files and a directory to the
`output` dir:

- `output/chart1.json`
- `output/chart2.json`
- `output/tilemill_projects`

`chart1.json` is the key-value pairs used for the first chart on the homepage.
It can be pasted directly into [`chart1.js`](https://github.com/cfpb/hmda-explorer/blob/master/src/static/js/charts/chart1.js#L10-L64).

`chart2.json` is the key-value pairs used for the second chart on the homepage.
It can be pasted directly into [`chart2.js`](https://github.com/cfpb/hmda-explorer/blob/master/src/static/js/charts/chart2.js#L13-L67).

__Note__ You will also have to change the `xAxis.categories` and `series` data in both of the `chart*_options.js` files

## Updating the Maps

`tilemill_projects` is a directory of TileMill project files designed to be
copied directly into your TileMill projects directory, making them immediately
configurable through the TileMill GUI. By default, TileMill stores projects in
`~/Documents/MapBox/project`.

At this point the folders and the `name` attribute inside `project.mml` file should be changed to reflect the release years and conform to the existing naming convention.
`hmda_r_o_y1_y2` => `hmda_r_o_18_19`

#### Updating the blank

Use TileOven for the upload of the blank since the tooltip grid does not seem to be uploaded with TileMill

```shell
cd ~/path/to/tileoven
./index.js
```

The application is available at [http://localhost:20009/#/](http://localhost:20009/#/)

Once the maps have been verified, export an `.mbtiles` file for the blank:
- [ ] `hmda_blank_y2`

**Note** you will have to save this file locally, and then upload it to Mapbox.
Unfortunately, this will result in a random id being assigned, but this is necessary to have
the tool tips show up

#### Updating the other tilesets

Launch TileMill and verify the maps
```shell
cd ~/path/to/tilemill
./index.js
```
The application is available at [http://localhost:20009/#/](http://localhost:20009/#/)

Once the maps have been verified, export an `.mbtiles` file for each of the following projects:
- [ ] `hmda_p_o_y1_y2`
- [ ] `hmda_r_o_y1_y2`

Exporting the tilesets will automatically send them to Mapbox.

#### Get the IDs

Verify there are three new `.mbtiles` files are in [Mapbox Studio](https://www.mapbox.com/studio/tilesets/)

Use the new map ids to update [`home.js`](https://github.com/cfpb/hmda-explorer/blob/master/src/static/js/pages/home.js#L37)

----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
