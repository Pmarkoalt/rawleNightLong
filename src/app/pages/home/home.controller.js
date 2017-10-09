import {promoSrc, tourDates, mixes}  from "./home.data.js";
import plyr from "plyr";
import $ from 'jquery'
import uiRouter from "@uirouter/angularjs";

function HomeController($scope){

  $scope.promoSrc = promoSrc;
  $scope.tourDates = tourDates;
  $scope.mixes = mixes;

  $scope.hoverIn = function(context){
    context.cardZoom = true;
  }

  $scope.hoverOut = function(context){
    context.cardZoom = false;
  }

  $scope.promoZoom = function(context){
    if ( conext.promoZoom === false ){
      return context.promoZoom = true;
    }
    context.promozoom = false;
  }

  $scope.newMusic = function(src){
    var current = document.getElementById("audio-player").src
    if (current !== src){
      document.getElementById("audio-player").src=src;
      $('button[data-plyr="pause"]').click();
    }
    else{
      $('button[data-plyr="pause"]').click();
    }
  }


}

// class HomeController {
//   constructor() {
//     this.promoSrc = promoSrc
//     this.tourDates = tourDates
//     this.mixes = mixes
//   }
//
//   hoverIn(context){
//     context.cardZoom = true;
//   }
//   hoverOut(context){
//     context.cardZoom = false;
//   }
//   promoZoom(context){
//     if (context.promoZoom === false){
//       return context.promoZoom = true
//     }
//       context.promoZoom = false
//   }
//   newMusic(src){
//     var current = document.getElementById("audio-player").src
//     if (current !== src){
//       document.getElementById("audio-player").src=src;
//       $('button[data-plyr="pause"]').click();
//     }
//     else{
//       $('button[data-plyr="pause"]').click();
//     }
//   }
//
//
//
// }

HomeController.$inject = ['$scope']

module.exports = HomeController
