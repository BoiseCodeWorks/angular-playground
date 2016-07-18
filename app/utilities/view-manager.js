;(function () {
  angular.module('angularPlayground')
    .controller('ViewManager', ViewManager)

  function ViewManager () {
    this.changeView = function (view) {
      this.view = view
    }

    if (location.hash) {
      this.view = location.hash.substr(2)
    } else {
      this.view = 'home'
    }
  }
}())
