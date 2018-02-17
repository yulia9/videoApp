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

class helperService {
  constructor() {
    this.browser = this.defineBrowser();
  }

  defineBrowser() {
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

    //TODO: Valera:add regexp for Firefox and Internet explorer (for other browsers by wish)

    return result;
  }

  getCookieInfo(cookieName) {

    return {
      cookieExists: document.cookie.indexOf(cookieName) > -1 ? true : false,
      value: getCookie(cookieName)
    };
  }

}


function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}


export default angular.module('helper', [])
  .service('helper', helperService)
  .name;