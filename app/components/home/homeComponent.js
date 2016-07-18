;(function () {
  angular.module('angularPlayground')

    .component('homeComponent', {
      controller: HomeController,
      templateUrl: '/app/components/home/home.html'
    })

  function HomeController () {
    this.homeStatus = 'Working'
  }
}())
