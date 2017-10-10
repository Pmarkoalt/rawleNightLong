import angular from 'angular'
import $ from 'jquery'
import {TweenMax} from "gsap"
import ngAnimate from 'angular-animate'
require('dotenv').config()

import scripts from './scripts/scripts'
import twitter from './scripts/twitter'

import home from './pages/home/home'
import release from './pages/releases/release'
import styles from './styles/main.scss'



angular
  .module('app', [
    'app.home',
    'app.release',
    'ngAnimate'
  ])
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/')
  })
