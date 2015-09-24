var app = angular.module('angularPlayground');

app.controller('ExpressionsController', ExpressionsController);


function ExpressionsController(){
	this.expressionsStatus = 'Working';
}