class AboutController {
  constructor( $scope, $http, $stateParams, $state) {
    this.state = "test"

  }
  foo() {
    return 'world'
  }

}

AboutController.$inject = ['$scope', '$http', '$stateParams', '$state']

module.exports = AboutController
