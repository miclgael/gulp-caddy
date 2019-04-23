const fs = require('fs')
const path = require('path')
const appDir = path.dirname('../../..') // The user's app directory

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
  paths = {
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

fs.writeFile(`${appDir}/caddy.config.js`, defaultOptions, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log(`config file saved to ${appDir}`);
});

fs.writeFile(`${appDir}/gulpfile.caddy.js`, `/* Rename this file to "gulpfile.js" if safe to do so */\nconst caddy = require('gulp-caddy')`, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log(`gulpfile saved to ${appDir}`);
});