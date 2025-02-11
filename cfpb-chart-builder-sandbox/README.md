# Cfpb chart builder sandbox

Sandbox for cfpb-chart-builder

## Dependencies

- [Gulp](http://gulpjs.com): task runner for pulling in assets,
  linting and concatenating code, etc.
- [Less](http://lesscss.org): CSS pre-processor.
- [Capital Framework](https://cfpb.github.io/capital-framework/getting-started):
  User interface pattern-library produced by the CFPB.

**NOTE:** If you're new to Capital Framework, we encourage you to
[start here](https://cfpb.github.io/capital-framework/getting-started).

## Installation

1. Install [Node.js](http://nodejs.org) however you'd like.
2. Install [Gulp](http://gulpjs.com) and [Bower](http://bower.io):
  ```bash
  npm install -g gulp bower
  ```
3. Next, install the dependencies and compile the project with:
  ```bash
  ./setup.sh
  ```
  __NOTE:__ To re-install and rebuild all the site’s assets run
  `./setup.sh` again. See the [usage](#usage) section on updating all the
  project dependencies.

## Running the sandbox
Once `setup.sh` is finished:

1. `gulp watch`
2. Open `http://localhost:8080/`

## Playing in the sandbox
- Editing `./src/build-a-chart/index.js` allows you to play around with the charts and how they're built.
- The HTML is located at `./src/index.html`


----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)



