import { mkdirSync, writeFileSync } from 'fs';
import nunjucks from 'nunjucks';

import customization from '../config/customization.js';
import environment from '../config/environment.js';
const { modules, unprocessed } = environment.paths;

const njkPaths = [
  `${unprocessed}/templates`,
  `${modules}/@cfpb/cfpb-icons/src`,
];

/**
 * @param {object} baseConfig - The base esbuild configuration.
 */
function templates(baseConfig) {
  nunjucks.configure(njkPaths, { throwOnUndefined: true });
  const result = nunjucks.render('index.html', customization.context);
  mkdirSync(baseConfig.outdir, { recursive: true });
  writeFileSync(`${baseConfig.outdir}/index.html`, result);
}

export { templates, njkPaths };
