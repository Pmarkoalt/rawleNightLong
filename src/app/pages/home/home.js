import angular from 'angular';
import $ from 'jquery';
import uiRouter from "@uirouter/angularjs";

import ngAnimate from 'angular-animate';

import HomeController from './home.controller';
import HomeTemplate from './home.template.html';

angular
  .module('app.home', [
    'ui.router',
    'ngAnimate'
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
    window.twttr = (function (d,s,id) {
      var t, js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
      js.src="https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
    }(document, "script", "twitter-wjs"));
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
        $scope.twitterLoad = () => {
            twttr.widgets.load();

        }
        //Animations for mouse hover
        element.on('mouseenter', function () {
           TweenLite.to($(this).find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
        });
        element.on('mouseleave', function () {
          TweenLite.to($(this).find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});
        });
        $scope.initAlbum();
        $scope.twitterLoad();
      }
    }
  });
