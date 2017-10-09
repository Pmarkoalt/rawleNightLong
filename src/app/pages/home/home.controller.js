import {promoSrc, tourDates, mixes}  from "./home.data.js";
import plyr from "plyr";
import $ from 'jquery'
import uiRouter from "@uirouter/angularjs";

const HTTP = new WeakMap();

class HomeController {
  constructor($scope, $http) {
    this.tourDates = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result => this.tourDates = result.data.items[0].fields.shows);
    this.mixes = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result => this.mixes = result.data.items[0].fields.mixes);
    // HTTP.set(this, $http);
    this.promoSrc = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result => this.promoSrc = result.data.includes.Asset);
  }


  hoverIn(context){
    context.cardZoom = true;
  }
  hoverOut(context){
    context.cardZoom = false;
  }
  promoZoom(context){
    if (context.promoZoom === false){
      return context.promoZoom = true
    }
      context.promoZoom = false
  }
  newMusic(src){
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

HomeController.$inject = ['$scope', '$http']

module.exports = HomeController
