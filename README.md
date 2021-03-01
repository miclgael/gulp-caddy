![Gulp Caddy](GulpCaddy.png)

> 💡 This repo is archived as of 2021-02-01 - what a wild ride. Please avoid using this software as there are security alerts from Dependabot that I don't have time to address. Leaving here in read-only mode.

Requireable task runners. Get up and running with building files a little quicker. 

Minimal config, but fairly opinionated. Uses *Gulp v4.x*

# Gulp Caddy

## How it works

Gulp Caddy aims to speed up your *time-to-actually-writing-code* by using pre-authored gulp tasks taken from Chris Ferdinandi's excellent [Gulp Boilerplate](https://github.com/cferdinandi/gulp-boilerplate).

On first install, two files will be copied to your project folder.

1. `caddy.config.js` - adjust settings and directories
2. `gulpfile.js` - import Gulp Caddy

As a bonus, your `package.json` will be much tidier by leaving all the core gulp tasks inside the `/node_modules/` directory.

## Using Gulp Caddy in your projects

You will need Node.js and Gulp CLI installed globally.

### Dependencies

*__Note:__ if you've previously installed Gulp globally, run `npm rm --global gulp` to remove it. [Details here.](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467)*

Make sure these are installed first:

- [Node.js](http://nodejs.org)
- [Gulp Command Line Utility](http://gulpjs.com) `npm install --global gulp-cli`

### Starting a new project

`npm init --yes`
`npm install gulp gulp-caddy --save`

Run `gulp` or `gulp watch` as per [Gulp Boilerplate quick start guide](https://github.com/cferdinandi/gulp-boilerplate#quick-start)

## 🃏 Running the tests

Tests are written using Jest, and can be found in `/tests/index.test.js` when cloning the repo. New tests would be welcome contributions!

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/miclgael/gulp-caddy/tags). 

## Authors

* **Michael Gale** - *First draft + maintainer* - [miclgael](https://github.com/miclgael)
* **Luke Martin**  - *Maintainer* - [iamlukem](https://github.com/iamlukem)

See also the list of [contributors](https://github.com/miclgael/gulp-caddy/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENCE](https://github.com/miclgael/gulp-caddy/blob/master/LICENCE) file for details

## Acknowledgments

* [Travis Maynard](https://travismaynard.com/writing/getting-started-with-gulp)
* [Chris Ferdinandi](https://gomakethings.com/a-new-gulp-boilerplate/)

## ROADMAP

- [x] ultimately, it would be nice to npm install, then require as a dependency to use.
- [x] get all of those dependencies out of the root project's `package.json`
- [x] gulp-caddy.config file to alter options from the root of the project
- [ ] modularize all the pieces of the gulp file. 
- [ ] create a process to "eject" from using caddy, and pull all tasks and dependencies back to `package.json` - for when the project scope gets bigger.
