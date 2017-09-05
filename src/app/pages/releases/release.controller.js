import {mixes}  from "../home/home.data.js";

function findMatch(array) {
    return array.urlName === "020917jersey" ;
}

var thisRelease = mixes.find(findMatch);
// { name: 'cherries', quantity: 5 }

class ReleaseController {
  constructor($scope,$http,$stateParams,$state) {
    this.message = 'Hello'
    this.thisRelease = thisRelease
    this.stateParams = $stateParams;
    this.state = $state;
  }
  foo() {
    return 'world'
  }
}

ReleaseController.$inject = []

module.exports = ReleaseController
