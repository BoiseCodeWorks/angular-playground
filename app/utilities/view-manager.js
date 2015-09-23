var app = angular.module('angularPlayground');

app.controller('ViewManager', ViewManager);


function ViewManager(){
	this.test = 'Angular is really neat! Look how easy it was for you to connect this string to your view';
	
	this.changeView = function(view){
		this.view = view;
	}
		
	if(location.hash){
		this.view = location.hash.substr(2);
	} else{
		this.view = 'home';
	}
}