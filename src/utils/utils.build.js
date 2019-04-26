const { src, dest } = require('gulp');

const srcFiles = [
  './src/lib.js',
  './src/postinstall.js',
  './src/utils/utils.writeFile.js'
];


(() => src(srcFiles).pipe(dest('./dist')))();