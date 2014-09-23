# thiscog

[![Build Status](https://travis-ci.org/tesfaldet/thiscog.svg?branch=master)](https://travis-ci.org/tesfaldet/thiscog)

A simple album discography manager written on the NEMB stack (node.js, ExpressJS, MongoDB, Backbone.js). It consists of a complete backend using node.js with ExpressJS, a data layer using MongoDB with Mongoose, and a complete front-end application built using Backbone.js (with Marionette and Browserify).

## Technologies

* Backbone.js
  * Handlebars
  * Browserify
  * Jasmine tests
* Node.js / ExpressJS
  * Handlebars
  * Mocha test runner
  * Chai assertions, Sinon spies, Proxyquire dependency overriding
* MongoDB
  * Mongoose
* Bower
  * package.json
* Grunt:
  * Bower install
  * Browserify
  * Handlebars (precompiled templates)
  * jsHint
  * LESS
  * CSS/JS minification/uglification
  * Karma client testing/tdd
  * Mocha node testing
  * Watchers
  * Concatenation/Copy
  * Concurrent runs (server, karma, mongod, etc)

## Requirements

node 0.10.x, npm, and mongodb.

## Install thiscog

    $ sudo npm install -g grunt-cli
    $ npm install
    $ grunt init:dev

## Running thiscog

	$ grunt server

This will:

1. clean build/app.js, build/thiscog.js, and build/thiscog.css (but not build/vender.js or build/tests.js since they rarely change);

2. Browserify client/src/main.js into build/app.js and client/spec/**/*.test.js into build/tests.js;

3. jshint client/src/**/*.js;

4. less transpile client/styles/reset.css, client/requires/\*/css/*, and client/styles/less/main.less into build/thiscog.css;

5. concat build/vendor.js and build/app.js into build/thiscog.js;

6. copy build/thiscog.js, build/thiscog.css, and client/img/* into public/js/thiscog.js, public/css/thiscog.css, and public/img/* respectively;

7. Start the node server in DEV mode with nodemon watching the app for a relaunch;

8. Start the mongo shell;

9. Start watchers on scripts, less files, and test files for rebuild and test.

Connect to localhost:3500 to view app locally.

### Front-end Tests/TDD:

Requires PhantomJS to be installed globally:

    $ sudo npm install -g phantomjs

To run tests in TDD watch mode:

    $ grunt tdd

To run tests once:

    $ grunt test:client

### Back-end (server) Tests:

Server tests have been added using Mocha, Chai, and Proxyquire. To run the tests:

    $ grunt test:server

Note:

    $ grunt test

Will run both back-end and front-end tests.

### Trello
Check out my progress on [Trello](https://trello.com/b/T0gVgFFM/thiscog)!
