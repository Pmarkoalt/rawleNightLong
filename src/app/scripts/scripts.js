import $ from "jquery";

import {TweenMax} from "gsap";

//IE doesn't transform-style:preserve-3d.
// for IE try https://codepen.io/rhernando/pen/vjGxH


//using TweenLite.set() takes care of all vendor-prefixes
TweenLite.set(".cardWrapper", {perspective:800});
TweenLite.set(".card", {transformStyle:"preserve-3d"});
TweenLite.set(".back", {rotationY:-180});
TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

$(".cardWrapper").hover(
  function() {
    TweenLite.to($(this).find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
  },
  function() {
    TweenLite.to($(this).find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});
  }
);

//a nice little intro;)
TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);

/* learn more about GSAP JS:
https://www.greensock.com/gsap-js/

more codepen samples:
https://codepen.io/collection/jmHAn

basics:
https://codepen.io/collection/ifybJ

*/
