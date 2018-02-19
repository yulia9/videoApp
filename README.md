# angularjs-webpack-ES6

### Project requirements

 1) Use AngularJS >= 1.5
 2) Use this instead of $scope
 3) Use this only for variables which should be available in html file
 4) Use components instead of directives
 5) use ES6
 
 ### Structure
 1) Services:
      1. ‘videoService’ – service which is responsible for work with videos (from youtube)
      2.  ‘helper’ – service, which will help to determine in which browser application was opened (for this you can use regexp) . Should determine Chrome, Opera, Firefox, Internet Explorer browser and etc.
 2) Components: 
    HTML structure should be done with help of components


### Quick start

* `fork` this repository
* `clone` your fork

```bash

* `npm install` to install all dependencies
 npm install

# add remote
 clone repository


# start the server
$ npm start
```
go to [http://localhost:8080](http://localhost:8080) in your browser.


## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)


## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`
