import angular from 'angular';

class headerController {
	constructor(helper) {
		this.greeting = `Hello, ${helper.browser.name} user`;
	}
};
headerController.$inject = ['helper'];

let headerComponent = {
  template: require('./header.html'),
  controller: 'headerController'
};

export default angular.module('header',[])
  .component('headerComponent', headerComponent)
  .controller('headerController', headerController)
  .name;
