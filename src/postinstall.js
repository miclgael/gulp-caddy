const fs = require('fs')
const path = require('path')
// const appDir = path.dirname(require.main.filename)
const appDir = path.dirname('../../') // The user's app directory (Good enough for now)

const defaultOptions = `/* Change config options as necessary for your project! */
  module.exports = new Object({
    'src':'./src',
    'dist':'./dist'
  })`;

fs.writeFile(`${appDir}/gulpcaddy.config.js`, defaultOptions, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log(`config file saved to ${appDir}/gulpcaddy.config.js`);
});