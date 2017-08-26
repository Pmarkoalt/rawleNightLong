
import promoSrc from "./promoSrc.js";

class HomeController {
  constructor() {
    this.message = 'Hello'
    this.promoSrc = promoSrc
    this.test= "test"
  }
  foo() {
    return 'world'
  }
  test(){
    console.log(this.test)
  }

}

HomeController.$inject = []

module.exports = HomeController
