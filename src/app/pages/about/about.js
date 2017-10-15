import angular from 'angular';
import uiRouter from "@uirouter/angularjs"
import AboutController from './about.controller'
import AboutTemplate from './about.template.html'

// // Directives
// import FooBar from '../../components/foo-bar/foo-bar.component'

angular
  .module('app.about', [
    'ui.router'
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('about', {
        url: '/about',
        views: {
          app: {
            template: AboutTemplate,
            controller: AboutController,
            controllerAs: 'about'
          }
        }
      })
  })
