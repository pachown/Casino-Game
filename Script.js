var casinoName = ''
var casinoLevel = 0
var slotMachines = 0
var pokerTables = 0
var crapsTables = 0
var blackjackTables = 0
var playerCash = 50000
var popularity = 0
var highRollers = 0
var loans = 0
var jackpots = 0


window.onload = function() {
    canvas = document.getElementById('casinoCanvas')
    canvasContext = canvas.getContext('2d');

    var gameDay = 10;
    setInterval ( {
        drawCasino();
    }, 1000*gameDay);
}

function drawCasino() {

}