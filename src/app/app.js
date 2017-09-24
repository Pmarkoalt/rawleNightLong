import angular from 'angular'
import $ from 'jquery'
import {TweenMax} from "gsap"

import scripts from './scripts/scripts'
import twitter from './scripts/twitter'

import home from './pages/home/home'
import release from './pages/releases/release'
import styles from './styles/main.scss'



angular
  .module('app', [
    'app.home',

    'app.release'
  ])
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/')
  })
