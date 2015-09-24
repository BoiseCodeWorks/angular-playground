var app = angular.module('angularPlayground');

app.controller('StartController', StartController);


function StartController(){
	this.startStatus = 'Working';
	this.test = 'Angular is really neat! Look how easy it was for you to connect this string to your view';
}