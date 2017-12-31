import angular from 'angular';
import '../style/app.css';

import components from  './components';

let app = function() {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [components])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;