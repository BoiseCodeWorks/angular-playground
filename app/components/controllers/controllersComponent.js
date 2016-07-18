;(function () {
  angular.module('angularPlayground')
    .component('controllersComponent', {
      controller: ControllersController,
      templateUrl: '/app/components/controllers/controllers.html'
    })

  function ControllersController () {
    this.controllersStatus = 'Working'
  }
}())
