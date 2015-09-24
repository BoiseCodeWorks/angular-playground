var app = angular.module('angularPlayground');

app.controller('BindingsController', BindingsController);


function BindingsController(){
	this.bindingsStatus = 'Working';
	this.name= "Please enter your Name";
}