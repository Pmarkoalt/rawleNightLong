import angular from 'angular';
import uiRouter from "@uirouter/angularjs"
import ReleaseController from './release.controller'
import ReleaseTemplate from './release.template.html'

// // Directives
// import FooBar from '../../components/foo-bar/foo-bar.component'

var scrollContent = function() {
    setTimeout(function(){
      window.scrollTo(0,0);
    }, 500);

};

angular
  .module('app.release', [
    'ui.router'
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('release', {
        url: '/release/{releaseId}',
        onEnter: scrollContent,
        views: {
          app: {
            template: ReleaseTemplate,
            controller: ReleaseController,
            controllerAs: 'release'
          }
        }
      })
  })
