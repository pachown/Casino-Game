//SLOT MACHINE

//Takes in the amount bet and returns random payout amounts that equal the winPercentage over 100 games
//Winpercentage will be 1.0. The player can change this ratio up or down.

var start = document.getElementById('start');
var betReturnInc = document.getElementById('bet-return-perc-incr');
var betReturnDec = document.getElementById('bet-return-perc-decr');
var betReturnModEl = document.getElementById('bet-return-perc');
var betAmountEl = document.getElementById('bet-total');
var betAmountInc = document.getElementById('bet-amount-incr');
var betAmountDec = document.getElementById('bet-amount-decr');
var moneyTotalEl = document.getElementById('money-total');
var resultsPost = document.getElementById('last-bet-results');

var startDay = document.getElementById('start-day');
var slotsOwnedEl = document.getElementById('slots-owned');
var slotsInc = document.getElementById('slots-incr');
var customersEl = document.getElementById('customers');
var jackpotEl = document.getElementById('jackpot');
var jackpotInc = document.getElementById('jackpot-incr');
var jackpotDec = document.getElementById('jackpot-decr');
var betAmount = 100;
betAmountEl.innerHTML = betAmount;
var moneyTotal = 2000;
moneyTotalEl.innerHTML = moneyTotal;
var betReturnMod = 100;
betReturnModEl.innerHTML = betReturnMod;
var slotsOwned = 10;
slotsOwnedEl.innerHTML = slotsOwned;
var customers = 5
customersEl.innerHTML = customers;
var jackpot = 0;
jackpotEl.innerHTML = jackpot;

//Customer Object Creation and storage

customers = [];

const createCustomer = (startingCash, betAmount) {
    return {
        cash = startingCash,
        betAmount = betAmount
    }
}

function randomBetAmount(multiplier) {
    return multiplayer * (Math.floor(Math.random() ))
}

//Individual Slot Machine Functionality

start.addEventListener('click', () => {
    slotMachine(betAmount, betReturnMod);
});

function slotMachine(amt, mod) {
    //array of 20 outcomes that average to 100 return per outcome
    outcomesArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, amt, amt, amt, amt, amt, (amt * 2), (amt * 2), (amt * 3), (amt * 3), (amt * 5)];

    //chooses a random outcome from arr
    outcome = outcomesArr[random(outcomesArr.length)];

    //modifies outcome based on modifier
    outcomeMod = outcome * (mod / 100);

    moneyTotal -= amt;
    moneyTotal += outcomeMod;
    moneyTotalEl.innerHTML = moneyTotal;

    resultsPost.innerText = `You bet ${amt} with ${mod}% modifier and won ${outcomeMod}!`;
}

// Full casino daily functionality

startDay.addEventListener('click', () => {
    casino(customers, betReturnMod);
});

function casino(customerInfo, betReturnMod) {

}

startDay.addEventListener('click', () => {
    casino(customers, betReturnMod);
});

function random(num) {
    return Math.floor(Math.random() * num);
}

//increasers & decreasers

betReturnInc.addEventListener('click', () => {
    betReturnMod += 5;
    betReturnModEl.innerHTML = betReturnMod;
});

betReturnDec.addEventListener('click', () => {
    betReturnMod -= 5;
    betReturnModEl.innerHTML = betReturnMod;
});

betAmountInc.addEventListener('click', () => {
    betAmount += 10;
    betAmountEl.innerHTML = betAmount;
});

betAmountDec.addEventListener('click', () => {
    betAmount -= 10;
    betAmountEl.innerHTML = betAmount;
});

slotsInc.addEventListener('click', () => {
    slotsOwned += 1;
    moneyTotal -= 1000;
    slotsOwnedEl.innerHTML = slotsOwned;
});

jackpotInc.addEventListener('click', () => {
    jackpot += 1;
    jackpotEl.innerHTML = jackpot;
});

jackpotInc.addEventListener('click', () => {
    jackpot -= 1;
    jackpotEl.innerHTML = jackpot;
});