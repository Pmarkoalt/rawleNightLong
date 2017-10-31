import angular from 'angular'
import $ from 'jquery'
import {TweenMax} from "gsap"
import ngAnimate from 'angular-animate'
import plyr from "plyr";
plyr.setup();

import home from './pages/home/home'
import release from './pages/releases/release'
import about from './pages/about/about'
import styles from './styles/main.scss'



angular
  .module('app', [
    'app.home',
    'app.release',
    'app.about',
    'ngAnimate'
  ])
  .config(($urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/')
    $locationProvider
  .html5Mode(true);
  });
  function lazyLoad(){
    var lazy =
    document.getElementsByClassName('lazy');

    for(var i=0; i<lazy.length; i++){
       lazy[i].src =
           lazy[i].getAttribute('data-src');
    }
}
