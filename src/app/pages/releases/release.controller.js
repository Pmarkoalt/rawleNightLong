class ReleaseController {
  constructor() {
    this.message = 'Hello'
  }
  foo() {
    return 'world'
  }
}

ReleaseController.$inject = []

module.exports = ReleaseController
