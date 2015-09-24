var app = angular.module('angularPlayground');

app.controller('HomeController', HomeController);


function HomeController(){
	this.homeStatus = 'Working';
}