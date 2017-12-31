import angular from 'angular';

class footerCtrl {
  constructor() {
    this.text = 'Buy';
  }
};

let footerComponent = {
  template: require('./footer.html'),
  controller: 'footerCtrl'
};

export default angular.module('footer',[])
  .component('footerComponent', footerComponent)
  .controller('footerCtrl', footerCtrl)
  .name;