var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
    this.controllersStatus = 'Working';
    this.friends = ['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross & Rachel'];
    this.addFriend = function () {
        if (this.newFriend) {
            this.friends.push(this.newFriend);
            this.newFriend = null;
        }
    }
}
