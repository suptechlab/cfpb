import esbuild from 'esbuild';
import { copy } from './copy.js';
import { scripts, jsPaths } from './scripts.js';
import { styles, cssPaths } from './styles.js';
import { templates } from './templates.js';

import environment from '../config/environment.js';
const { processed } = environment.paths;

const baseConfig = {
  logLevel: 'info',
  bundle: true,
  minify: true,
  sourcemap: true,
  external: ['*.png', '*.woff', '*.woff2', '*.gif'],
  loader: {
    '.svg': 'text',
  },
  outdir: `${processed}`,
};

const arg = process.argv.slice(2)[0];

(async function () {
  const scriptsConfig = scripts(baseConfig);
  const stylesConfig = styles(baseConfig);
  const mergedConfig = { ...scriptsConfig, ...stylesConfig };
  mergedConfig.entryPoints = jsPaths.concat(cssPaths);

  if (arg === 'watch') {
    await templates(baseConfig);
    const ctx = await esbuild.context(mergedConfig);
    await ctx.watch();
    // Not disposing context here as the user will ctrl+c to end watching.
  } else if (arg === 'scripts') {
    const ctx = await esbuild.context(scriptsConfig);
    await ctx.rebuild();
    return await ctx.dispose();
  } else if (arg === 'styles') {
    const ctx = await esbuild.context(stylesConfig);
    await ctx.rebuild();
    return await ctx.dispose();
  } else if (arg === 'templates') {
    // const ctx = await esbuild.context(templatesConfig);
    // await ctx.rebuild();
    // return await ctx.dispose();
    await templates(baseConfig);
  } else {
    await templates(baseConfig);
    const ctx = await esbuild.context(mergedConfig);
    await ctx.rebuild();
    await ctx.dispose();
  }

  await copy(baseConfig);
})();
