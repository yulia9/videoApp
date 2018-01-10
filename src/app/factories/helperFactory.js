import angular from 'angular';

let browsers = {
  chrome: 'chrome',
  firefox: 'firefox',
  opera: 'opera',
  ie: 'ie',
  safari: 'safari',
  unknown: 'unknown'
};
let userAgent = window.navigator.userAgent;

class helperFactory {
  constructor() {
  }

}

helperFactory.prototype.browser =(function() {
  let result;

  if (/chrome|crios|crmo/i.test(userAgent) && /^((?!(OPR)).)*$/i.test(userAgent) && /^((?!(Edge)).)*$/i.test(userAgent)) { // Google Chrome
    result = {
      name: browsers.chrome,
      chrome: true
    }
  } else if (/safari/i.test(userAgent) && /^((?!(OPR)).)*$/i.test(userAgent)) { // Safari
    result = {
      name: browsers.safari,
      safari: true
    }
  } else {
    result = {
      name: browsers.unknown,
      unknown: true
    }
  }

  // Task for Valera: add regexp for firefox and internet explorer (for other browsers by wish)

  return result;
})()

export default angular.module('helper', [])
  .service('helper', helperFactory)
  .name;