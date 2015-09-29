﻿var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
//No need to change anything above this line.

function MainController() {
    var vm = this; //instead of using this when referring to the controller, let's use vm. It will make things easier.
    vm.working = "Yes";

    // Frog Races ----------------------------------------------------------------------------
    vm.winner = "";
    vm.frogs = [
        { lane: 1, name: "Frank", position: 0, picUrl: "img/BullFrog.gif" },
        { lane: 2, name: "Harry", position: 0, picUrl: "img/BullFrog.gif" },
        { lane: 3, name: "Eddie", position: 0, picUrl: "img/BullFrog.gif" },
        { lane: 4, name: "Duane", position: 0, picUrl: "img/BullFrog.gif" },
        { lane: 5, name: "Hank", position: 0, picUrl: "img/BullFrog.gif" }
    ];

    vm.getCount = function () {
        return vm.frogs.length;
    };

    vm.getTrackWidth = function () {
        var raceTrackWidth = document.getElementById('raceTrack').offsetWidth;
        //console.log("Track width is : " + raceTrackWidth);
        return raceTrackWidth;
    };

    var winning = 0;
    var raceTrackWidth = document.getElementById('raceTrack').offsetWidth;

    vm.startRace = function () {
        console.log("startRace function not working");
        //var startTime = Date.now();
        //var endTimeLimit = startTime + 100000;
        //for (var w = startTime; w < endTimeLimit; w++) {
        //    vm.move();
        //    if (winning >= raceTrackWidth) {
        //        break;
        //    }
        //    for (var t = 1; t <= 3; t++) {
        //        setTimeout(function (x) { return function () { console.log(x); }; }(t), 1000 * t);
        //    }
        //}
    }

    vm.move = function () {
        if (winning < raceTrackWidth) {
            for (var i = 0; i < vm.frogs.length; i++) {
                var w = i + 1;
                var posX = vm.frogs[i].position + Math.floor(Math.random() * 35);
                vm.frogs[i].position = posX;
                document.getElementById('frog' + w).style.left = posX + "px";
                if (winning < posX) {
                    winning = posX;
                }
                if (winning >= raceTrackWidth) {
                    vm.winner = " Winner is " + vm.frogs[i].name + " in lane " + vm.frogs[i].lane + "   ";
                    break;
                }
            }
            raceTrackWidth = document.getElementById('raceTrack').offsetWidth;
        }
        // TESTING A TIMER
        //for (var t = 1; t <= 3; t++) {
        //    setTimeout(function (x) { return function () { console.log(x); }; }(t), 1000 * t);
        //}
    }

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