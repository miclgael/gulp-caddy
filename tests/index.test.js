const gulp = require('gulp')

it("installed Jest correctly", () => {
  expect(true).toEqual(true)
})

it("installed Gulp correctly", () => {
  expect(gulp).toBeDefined()
})

it("can define tasks", () => {
  expect(gulp.task).toBeDefined()
})

it("builds to /dist/ folder", () => {
  expect(require('../dist/lib.js')).toBeDefined()
})