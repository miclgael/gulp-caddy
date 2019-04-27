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

it("writes lib.js to /dist/", () => {
  expect(fs.existsSync('./dist/lib.js')).toBe(true)
})

it("writes postinstall.js to /dist/", () => {
  expect(fs.existsSync('./dist/postinstall.js')).toBe(true)
})

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