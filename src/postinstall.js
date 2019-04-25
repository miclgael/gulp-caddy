const path = require('path')
const appDir = path.dirname('../../..') // The user's app directory

const writeFile = require('../src/partials/utils');

const defaultOptions = `
module.exports = {
  // Turn build tasks on and off!
  settings: {
    clean: true,
    scripts: true,
    polyfills: true,
    styles: true,
    svgs: true,
    copy: true,
    reload: true
  },
  // Specify paths to your assets!
  paths: {
    input: 'src/',
    output: 'dist/',
    scripts: {
      input: 'src/js/*',
      polyfills: '.polyfill.js',
      output: 'dist/js/'
    },
    styles: {
      input: 'src/sass/**/*.{scss,sass}',
      output: 'dist/css/'
    },
    svgs: {
      input: 'src/svg/*.svg',
      output: 'dist/svg/'
    },
    copy: {
      input: 'src/copy/**/*',
      output: 'dist/'
    },
      reload: './dist/'
    }
}`;

writeFile(appDir,'caddy.config.js', defaultOptions);
writeFile(appDir,'gulpfile.js', `const caddy = require('gulp-caddy')`);