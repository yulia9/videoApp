import angular from 'angular';
import helper from '../factories/helperService';
import videoService from '../factories/videoService';
import header from './header/headerComponent';
import footer from './footer/footerComponent';
import videoComponent from './videoSection/videoComponent';

export default angular.module('components', [header, footer, helper, videoComponent, videoService])
 .name;

