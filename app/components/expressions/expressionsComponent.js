(function () {
	
angular.module('angularPlayground')

	.component('expressionsComponent', {
		controller: ExpressionsController,
		templateUrl: "app/components/expressions/expressions.html"
	});


function ExpressionsController(){
	this.expressionsStatus = 'Working';
		this.test = 'Angular is really neat! Look how easy it was for you to connect this string to your view';
}
} ());