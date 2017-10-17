import {promoSrc, tourDates, mixes}  from "./home.data.js";
import plyr from "plyr";
import uiRouter from "@uirouter/angularjs";

class HomeController {
  constructor($scope, $http) {

    this.tourDates = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result => this.tourDates = result.data.items[0].fields.shows);

    this.mixes = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result => this.mixes = result.data.items[0].fields.mixes);

    this.promoSrc = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result =>{
          var data = [];
          // console.log(result.data.includes.Asset.length);
         for (var i = 0; i < result.data.includes.Asset.length; i++){
           var thisItem =  result.data.includes.Asset[i];
           var item = {}
           item.alt = thisItem.sys.id;
           item.src = `https:${thisItem.fields.file.url}`;
           data.push(item);
         }
         this.promoSrc = data});

    this.twitter = $http.get('api/twitter').then(result => this.twitter = result.data);
    this.showTwitter = false;

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
  handleTwitter(){
    this.showTwitter = !this.showTwitter;
    // console.log('test');
  }



}

HomeController.$inject = ['$scope', '$http']

module.exports = HomeController
