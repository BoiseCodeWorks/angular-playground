;(function () {
  angular.module('angularPlayground')
    .component('navbarComponent', {
      template: `
			<div class="panel panel-heading">
				<ul class="nav nav-pills">
					<li ng-repeat="state in vm.navStates" ng-class="{'active': vm.view === state}"><a ui-sref="{{state}}">{{state}}</a></li>
				</ul>
			</div>
			`,
      controller: ViewManager,
      controllerAs: 'vm'
    })

  function ViewManager ($scope, $state, navStates) {
		var vm = this;
		this.navStates = navStates;
		$scope.$on('$stateChangeSuccess', function(){
    	vm.view = $state.current.name;
		})
  }
}())
