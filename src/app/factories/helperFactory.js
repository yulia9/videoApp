import angular from 'angular';

let browsers = {
  chrome: 'chrome',
  firefox: 'firefox',
  opera: 'opera',
  ie: 'ie'
};

class helperFactory {
  constructor() {
  }
 

  isBrowser() {
    return browsers;
  }
}

export default angular.module('helper', [])
  .service('helper', helperFactory)
  .name;