var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
//No need to change anything above this line.

function MainController() {
    var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier.
    vm.working = "Yes";

    // Frog Races ----------------------------------------------------------------------------
    vm.frogs = [
        { lane: 1, name: "Frank", position: 0 },
        { lane: 2, name: "Harry", position: 0 },
        { lane: 3, name: "Ed", position: 0 },
        { lane: 4, name: "Hank", position: 0 },
        { lane: 5, name: "Duane", position: 0 }
    ];

    vm.getCount = function () {
        return vm.frogs.length;
    };
    //for (var i = 0; i < vm.frogs.length; i++) {
    //    console.log(vm.frogs[i].name + " in lane " + vm.frogs[i].lane);
    //}

    // Fun with Joe and Bob panel ------------------------------------------------------------ 
    vm.joe = new Guy("Joe", 100);
    vm.bob = new Guy("Bob", 150);
    vm.bank = 200;

    function Guy(name, startingCash) {
        this.name = name;
        this.cash = startingCash;
        this.giveCash = function (amount) {
            if (amount <= this.cash && amount > 0) {
                this.cash = this.cash - amount;
                return amount;
            } else {
                console.log("I don't have enough cash to give you " + amount + ". " + this.name + " says...");
                return 0;
            }
        };
        this.receiveCash = function (amount) {
            if (amount > 0) {
                this.cash = this.cash + amount;
                return amount;
            } else {
                console.log(amount + " isn't an amount I'll take " + this.name + " says...");
                return 0;
            }
        }
    }

    vm.giveMoneyToJoe = function () {
        if (vm.bank >= 10) {
            vm.bank -= vm.joe.receiveCash(10);
        } else {
            alert("The bank is out of money.");
        }
    }

    vm.receiveMoneyFromBob = function () {
        vm.bank += vm.bob.giveCash(5);
    }

}