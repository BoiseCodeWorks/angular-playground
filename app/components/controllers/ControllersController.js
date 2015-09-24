var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
	this.controllersStatus = 'Working';
}