import angular from 'angular';
import $ from 'jquery';
import uiRouter from "@uirouter/angularjs";

import twitter from '../../scripts/twitter.js';

import HomeController from './home.controller';
import HomeTemplate from './home.template.html';

angular
  .module('app.home', [
    'ui.router'
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          app: {
            template: HomeTemplate,
            controller: HomeController,
            controllerAs: 'home'
          }
        }
      })
  })
  .directive('album', function(){
    //vendor prefixes cross browser
    TweenLite.set(".cardWrapper", {perspective:800});
    TweenLite.set(".card", {transformStyle:"preserve-3d"});
    TweenLite.set(".back", {rotationY:-180});
    TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
    TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);
    return {
      restrict: 'A',
      link: function ($scope, element, attrs) {
        //Opening Animation
        $scope.initAlbum = () => {
          TweenLite.set(".cardWrapper", {perspective:800});
          TweenLite.set(".card", {transformStyle:"preserve-3d"});
          TweenLite.set(".back", {rotationY:-180});
          TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
          TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);
        }
        //Animations for mouse hover
        element.on('mouseenter', function () {
           TweenLite.to($(this).find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
        });
        element.on('mouseleave', function () {
          TweenLite.to($(this).find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});
        });
        $scope.initAlbum();
      }
    }
  });
