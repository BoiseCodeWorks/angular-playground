var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
//No need to change anything above this line.

function MainController($timeout) {
    var vm = this; //instead of using this when referring to the controller, let's use vm. It will make things easier.
    vm.working = "Yes";

    vm.frogSet = [
        { lane: 1, name: "Frank", position: 0, picUrl: "img/BullFrog.gif", color: "red" },
        { lane: 2, name: "Harry", position: 0, picUrl: "img/BullFrog.gif", color: "green" },
        { lane: 3, name: "Eddie", position: 0, picUrl: "img/BullFrog.gif", color: "maroon" },
        { lane: 4, name: "Duane", position: 0, picUrl: "img/BullFrog.gif", color: "blue" },
        { lane: 5, name: "Hank", position: 0, picUrl: "img/BullFrog.gif", color: "orange" },
        { lane: 6, name: "Drake", position: 0, picUrl: "img/BullFrog.gif", color: "indigo" },
        { lane: 7, name: "Gerik", position: 0, picUrl: "img/BullFrog.gif", color: "brown" },
        { lane: 8, name: "Monte", position: 0, picUrl: "img/BullFrog.gif", color: "purple" },
        { lane: 9, name: "Abel", position: 0, picUrl: "img/BullFrog.gif", color: "orangered" }
    ];

    vm.frogs = [];
    for (var i = 0; i < 6; i++) {
        vm.frogs.push(vm.frogSet[i]);
    }

    vm.winner = "You have " + vm.frogs.length + "  frogs ready to RACE ! ";

    vm.addFrog = function () {
        var a = vm.frogs.length + 1;
        if (a > 9) { a = 9 };
        vm.frogs = [];
        for (var i = 0; i < a; i++) {
            vm.frogs.push(vm.frogSet[i]);
            console.log("adding frogs " + i);
        }
        vm.newRace();
    }

    vm.removeFrog = function () {
        var a = vm.frogs.length - 1;
        if (a < 2) { a = 2 };
        vm.frogs = [];
        for (var i = 0; i < a; i++) {
            vm.frogs.push(vm.frogSet[i]);
            console.log("removing frogs " + i);
        }
        vm.newRace();
    }

    vm.getTrackWidth = function () {
        var raceTrackWidth = document.getElementById('raceTrack').offsetWidth;
        //console.log("Track width is : " + raceTrackWidth);
        return raceTrackWidth;
    };

    vm.newRace = function () {
        vm.winner = "";
        for (var i = 0; i < vm.frogs.length; i++) {
            vm.frogs[i].position = 0;
            document.getElementById('frog' + (i + 1)).style.left = vm.frogs[i].position + "px";
            vm.winner = "You have " + vm.frogs.length + "  frogs ready to RACE ! ";
        }
    }

    vm.startRace = function () {
        vm.winner = "And they're off ! ";
        var winning = 0;
        var raceTrackWidth = document.getElementById('raceTrack').offsetWidth;
        var itsDone = false;
        if (!itsDone) {
            for (var i = 0; i < vm.frogs.length; i++) {
                var posX = vm.frogs[i].position + Math.floor(Math.random() * 20);
                vm.frogs[i].position = posX;
                document.getElementById('frog' + (i + 1)).style.left = posX + "px";
                if (winning < posX) { winning = posX; };
                if (winning >= raceTrackWidth) {
                    vm.winner = " Winner: " + vm.frogs[i].name + " wearing " + vm.frogs[i].color + " in lane " + vm.frogs[i].lane + "   ";
                    itsDone = true;
                    break;
                }
            }
        }
        if (!itsDone) {
            $timeout(vm.startRace, 70);
        }
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

// Betting Service is separate from Main Controller ================================= 
app.service('BettingService', BettingService);
function BettingService() {
    
    function BettingService() {
        var _races = {};
        var _raceId = 0;
        this.registerRace = function () {

        }
        this.getRace = function (reaceId) {

        }
        var Race = function () {
            this.id = _raceId;
            this.tickets = 1300;
            this.contestants = [];
            this.open = true;
            this.bets = {};
            _races[this.id] = this;
            _raceId++;
        }
    }

}  // end of Betting Service =====================================================

//var roster = {
//    players: {},
//    addPlayer: function (player) {
//        if (player.name) {
//            this.players[player.id] = player;
//            reloadPlayerCards();
//        } else {
//            alert("Unable to Add Player... likely missing a field or invalid data format.");
//        }
//    }
//}

//var fullNFL = {
//    players2: {},
//    addPlayer2: function (player2) {
//        this.players2[player2.id] = player2;
//    }
//}

//// roster factory
//var Player = function (name, position, number, photo, team, status, byeweek, age, id) {
//    this.name = name;
//    this.position = position;
//    this.number = number;
//    this.photo = photo;
//    this.team = team;
//    this.status = status;
//    this.byeweek = byeweek;
//    this.age = age;
//    this.id = id;
//}
