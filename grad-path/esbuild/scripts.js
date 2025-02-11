import environment from '../config/environment.js';
const { unprocessed } = environment.paths;

const js = `${unprocessed}/js`;
const jsPaths = [`${js}/college-costs.js`];

/**
 * @param {object} baseConfig - The base esbuild configuration.
 * @returns {object} The modified configuration object.
 */
function scripts(baseConfig) {
  return {
    ...baseConfig,
    entryPoints: jsPaths,
    target: 'es6',
  };
}

export { scripts, jsPaths };
