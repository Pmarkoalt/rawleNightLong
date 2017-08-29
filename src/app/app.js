import angular from 'angular'
import $ from 'jquery'

import home from './pages/home/home'
// import release from './pages/releases/release'
import styles from './styles/main.scss'

angular
  .module('app', [
    'app.home',

    // 'app.release'
  ])
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/')
  })
