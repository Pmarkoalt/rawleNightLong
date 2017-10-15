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
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/')
  })
