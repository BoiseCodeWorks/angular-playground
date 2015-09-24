var app = angular.module('angularPlayground');

app.controller('ExpressionsController', ExpressionsController);


function ExpressionsController(){
	this.expressionsStatus = 'Working';
		this.test = 'Angular is really neat! Look how easy it was for you to connect this string to your view';
}