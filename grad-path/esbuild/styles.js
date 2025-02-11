import { readdirSync } from 'fs';
import postCSSPlugin from './plugins/postcss.js';
import autoprefixer from 'autoprefixer';

import environment from '../config/environment.js';
const { unprocessed, modules } = environment.paths;

const css = `${unprocessed}/css`;
const cssPaths = [`${css}/main.less`];

/**
 * @param {object} baseConfig - The base esbuild configuration.
 * @returns {object} The modified configuration object.
 */
function styles(baseConfig) {
  return {
    ...baseConfig,
    entryPoints: cssPaths,
    plugins: [
      postCSSPlugin({
        plugins: [autoprefixer],
        lessOptions: {
          math: 'always',
          paths: [
            ...readdirSync(`${modules}/@cfpb`).map(
              (v) => `${modules}/@cfpb/${v}/src`
            ),
            `${modules}/cfpb-chart-builder/src/css`,
            `${modules}`,
          ],
        },
      }),
    ],
  };
}

export { styles, cssPaths };
