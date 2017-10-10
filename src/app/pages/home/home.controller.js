import {promoSrc, tourDates, mixes}  from "./home.data.js";
import plyr from "plyr";
import uiRouter from "@uirouter/angularjs";
import Rythm from 'rythm.js';
var Twitter = require('twitter');
const rythm = new Rythm();
require('dotenv').config()

var client = {
  consumer_key: "GpPwVdlunyuP2MpUKd9Bd6y67",
  consumer_secret: "ENOsMzajfpPJgoPwNvC3D1CPIQIzVe8JZa4QV4fotSVT9ReUgs",
  access_token_key: "732466334575919104-CB4vL83fO0sL1LP9yfgLC6YVoA49iYO",
  access_token_secret: "LXQGQcik9J91cjOgf3tFySWgmP5qc144HYmFcWMjghCEn"
}

class HomeController {
  constructor($scope, $http) {
    this.tourDates = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result => this.tourDates = result.data.items[0].fields.shows);
    this.mixes = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result => this.mixes = result.data.items[0].fields.mixes);
    // HTTP.set(this, $http);
    this.promoSrc = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result => this.promoSrc = result.data.includes.Asset);
    this.twitter = {}

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
      document.querySelectorAll('button[data-plyr="pause"]')[0].click();
    }
    else{
      document.querySelectorAll('button[data-plyr="pause"]')[0].click();
    }
  }



}

HomeController.$inject = ['$scope', '$http']

module.exports = HomeController
