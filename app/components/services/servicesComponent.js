;(function () {
  angular.module('angularPlayground')

    .component('servicesComonent', {
      controller: ServicesController,
      templateUrl: '/app/components/services/services.html'
    })

  function ServicesController () {
    this.servicesStatus = 'Working'
  }
}())
