# angularjs-webpack

[![Dependency Status](https://david-dm.org/preboot/angularjs-webpack/status.svg)](https://david-dm.org/preboot/angular-webpack#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angularjs-webpack/dev-status.svg)](https://david-dm.org/preboot/angularjs-webpack#info=devDependencies)

A complete, yet simple, starter for AngularJS using Webpack.
* WEBPACK.
* ES6 support with babel.
* Server with live reload.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Project requirements

 1) Use AngularJS >= 1.5
 2) Use this instead of $scope
 3) Use this only for variables which should be available in html file
 4) Use components instead of directives
 5) use ES6
 
 ### Initial requirements
 1) Factories:
    1.	‘helper’ – factory, which will help to determine in which browser application was opened (for this you can use regexp) . Should determine Chrome, Opera, Firefox, Internet Explorer browser
 2) Services:
       1. ‘contentRequest’ – service which is responsible for content requests (from youtube)
       2. ‘contentHandler’ – service which works with JSON files
 3) Providers:
       1. ‘loginService’ – takes data about user from localStorage or cookies, login the user
 4) Components: 
    HTML structure should be done with help of components



### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/yulia9/videoApp.git

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)
