var app = angular.module('angularPlayground');

app.controller('StartController', StartController);


function StartController(){
	this.startStatus = 'Working';
}