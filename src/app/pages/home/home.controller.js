import {promoSrc, tourDates, mixes}  from "./home.data.js";

class HomeController {
  constructor() {
    this.promoSrc = promoSrc
    this.tourDates = tourDates
    this.mixes = mixes
  }
  // init(){
  //   TweenLite.set(".cardWrapper", {perspective:800});
  //   TweenLite.set(".card", {transformStyle:"preserve-3d"});
  //   TweenLite.set(".back", {rotationY:-180});
  //   TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
  //   // TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);
  // }
  hoverIn(context){
    context.cardZoom = true;
  }
  hoverOut(context){
    context.cardZoom = false;
  }
  cardFlip(context){
    if (context.cardFlip === false){
      return context.cardFlip = true;
    }
      context.cardFlip = false;
  }
  promoZoom(context){
    if (context.promoZoom === false){
      return context.promoZoom = true
    }
      context.promoZoom = false
  }


}

HomeController.$inject = []

module.exports = HomeController
