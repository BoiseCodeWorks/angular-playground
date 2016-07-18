;(function () {
  angular.module('angularPlayground')
    .controller('AngularStatusInidicator', AngularStatusInidicator)

  function AngularStatusInidicator ($scope) {
    this.angularStatus = 'Working'
  }
}())
