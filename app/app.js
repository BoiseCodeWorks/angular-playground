(function () {
    
angular.module('angularPlayground', ['Prism', 'ui.router'])
.constant('navStates', ['home', 'start', 'expressions', 'bindings', 'controllers', 'repeat', 'cart'])
.config(function($stateProvider, navStates){

	navStates.forEach(function(state){
		$stateProvider.state({
			name: state,
			url: `/${state}`,
			template: `<${state}-component></${state}-component>`
		})
	})
})
.controller('MainController', MainController);

function MainController(){
	
}

}())