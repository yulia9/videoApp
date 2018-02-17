import angular from 'angular';

class headerController {
  constructor(helper) {
    this.helper = helper;
    this.greeting = `Hello, ${helper.browser.name} user`;
    this.isNewUser = this.isNewUserCheck();

  }

  // Checks if user visited the site first time.
  isNewUserCheck() {
    let userCookie = this.helper.getCookieInfo('userName');

    // If cookie exists, it means that user visited site earlier.
    if (userCookie.cookieExists) {
      this.userCookie = userCookie.value;
    }

    return !userCookie.cookieExists;
  }

  saveUserName(name) {
    document.cookie = `userName=${name.toUpperCase()}`;
    this.userCookie = name.toUpperCase();
    this.isNewUser = false;
  }

};

headerController.$inject = ['helper'];

let headerComponent = {
  template: require('./header.html'),
  controller: 'headerController'
};

export default angular.module('header', [])
  .component('headerComponent', headerComponent)
  .controller('headerController', headerController)
  .name;
