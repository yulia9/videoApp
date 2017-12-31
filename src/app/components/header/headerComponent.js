import angular from 'angular';

class headerController {
	constructor(helper) {
		this.greeting = 'Hello123';
		console.log ('123', helper.isBrowser())
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
