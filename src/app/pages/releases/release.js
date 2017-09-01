import angular from 'angular';
import uiRouter from "@uirouter/angularjs"
import ReleaseController from './release.controller'
import ReleaseTemplate from './release.template.html'

// // Directives
// import FooBar from '../../components/foo-bar/foo-bar.component'

angular
  .module('app.release', [
    'ui.router'
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('release', {
        url: '/release/{releaseId}',
        views: {
          app: {
            template: ReleaseTemplate,
            controller: ReleaseController,
            controllerAs: 'release'
          }
        }
      })
  })
