var app = angular.module('angularPlayground');

app.controller('AngularStatusInidicator', AngularStatusInidicator);


function AngularStatusInidicator($scope){
	this.angularStatus = 'Working';
}