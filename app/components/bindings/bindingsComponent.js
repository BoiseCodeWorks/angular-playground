(function () {
	
angular.module('angularPlayground')
	.component('bindingsComponent', {
		controller: BindingsController,
		templateUrl: "/app/components/bindings/bindings.html"
	})

function BindingsController(){
	this.bindingsStatus = 'Working';
	this.name= "Please enter your Name";
}
}())