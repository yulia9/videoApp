import angular from 'angular';
import header from './header/headerComponent';
import footer from './footer/footerComponent';
import helper from '../factories/helperFactory';

export default angular.module('components', [header, footer, helper])
 .name;

