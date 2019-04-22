const gulp = require('gulp')
const config = require('../../gulpcaddy.config.js') // this will probably break everything.

gulp.task('default', async function() { 

  console.log(
    '\n\nCONFIG:', config, '\n\n'
  );
 
  console.log("\n\n Hello, from `gulp-caddy/dist/lib.js` \n\n");
})