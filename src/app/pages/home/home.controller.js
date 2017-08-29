
import {promoSrc, tourDates, mixes}  from "./home.data.js";
import {TweenMax} from "gsap";

class HomeController {
  constructor() {
    this.cardFlip = false
    this.promoSrc = promoSrc
    this.tourDates = tourDates
    this.mixes = mixes
  }
  hoverIn(context){
    context.cardFlip = true;
  }
  hoverOut(context){
    context.cardFlip = false;
  }


}

HomeController.$inject = []

module.exports = HomeController
