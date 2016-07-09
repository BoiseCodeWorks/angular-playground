(function () {
	
angular.module('angularPlayground')

	.component('startComponent', {
		controller: StartController,
	templateUrl: "app/components/start/start.html"	
	});


function StartController(){
	this.startStatus = 'Working';
}
} ());