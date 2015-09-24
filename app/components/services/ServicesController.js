var app = angular.module('angularPlayground');

app.controller('ServicesController', ServicesController);


function ServicesController(){
	this.servicesStatus = 'Working';
}