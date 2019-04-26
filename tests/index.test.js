const gulp = require('gulp');
const fs = require('fs');
const writeFile = require('../src/utils/utils.writeFile');

it("installs Jest correctly", () => {
  expect(true).toEqual(true)
})

it("installs Gulp correctly", () => {
  expect(gulp).toBeDefined()
})

it("can define tasks", () => {
  expect(gulp.task).toBeDefined()
})

// it("builds to /dist/ folder", () => {
//   expect(require('../dist/lib.js')).toBeDefined()
// })

// it("defines postinstall script", () => {
//   expect(require('../dist/postinstall.js')).toBeDefined()
// })

it("writes a file", () => {

  // 1. Write a temp file
  writeFile('./','temp.txt', 'Hello, world!');
  
  // 2. Read from file, await callback
  fs.readFile('./temp.txt', data => processFile(data));
  
  // 3. Wait for file load complete.
  const processFile = (data) => {
    expect(data).toBe('Hello, world!');
  };
  
  // 4. remove the file
  fs.unlink('./temp.txt', err => {
    if (err) throw err
  });



  
})