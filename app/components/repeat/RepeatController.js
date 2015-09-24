var app = angular.module('angularPlayground');

app.controller('RepeatController', RepeatController);


function RepeatController(){
	this.repeatStatus = 'Working';
}