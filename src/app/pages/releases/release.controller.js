import {mixes}  from "../home/home.data.js";


class ReleaseController {
  constructor( $scope, $http, $stateParams, $state) {
    this.state = $stateParams.releaseId
    this.thisRelease = $http.get('https://cdn.contentful.com/spaces/lqab19ta6h2l/entries?access_token=888767b45cc3d201490b81c826ef326b853f7d1f4a32098aefe090e734d9a23f')
    .then(result => this.thisRelease = result.data.items[0].fields.mixes[$stateParams.releaseId]);
  }
  findMatch(array) {
      return array.urlName === this.state;
  }
  foo() {
    return 'world'
  }

}

ReleaseController.$inject = ['$scope', '$http', '$stateParams', '$state']

module.exports = ReleaseController
