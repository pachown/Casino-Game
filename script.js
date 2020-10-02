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
var jackpot = [];
jackpotEl.innerHTML = jackpot.length;


//Customer Object Creation and storage
var custIdentifier = 0;

function createCustomer(multiplier) {
    custIdentifier += 1;
    return {
        cash: Math.floor(randomStartingAmount(multiplier)),
        custBetAmt: Math.floor(randomStartingAmount(multiplier) / 10),
        id: custIdentifier
    }
}

function randomStartingAmount(multiplier) {
    return multiplier * (random(1000));
}

var customersArr = [createCustomer(random(3)+.5), createCustomer(random(3)+.5), createCustomer(random(3)+.5), createCustomer(random(3)+.5), createCustomer(random(3)+.5)];

// Full casino daily functionality

startDay.addEventListener('click', () => {
    casino(customersArr, betReturnMod);
});

function casino(custInfo, betReturnMod) {
    
    if(custInfo.length > slotsOwned){
        custInfo.length = slotsOwned;
    }
  custInfo.forEach(function(cust) {
    custSlotMachine(cust.custBetAmt, betReturnMod, cust)
  });
}

function random(num) {
    return Math.floor(Math.random() * num);
}
//Customer Slot Machine Functionality

function custSlotMachine(amt, mod, custObj) {
    //array of 20 outcomes that average to an even return on average
    outcomesArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, amt, amt, amt, amt, amt, (amt * 2), (amt * 2), (amt * 3), (amt * 3), (amt * 5)];

    //chooses a random outcome from arr
    outcome = outcomesArr[random(outcomesArr.length)];

    //modifies outcome based on modifier
    outcomeMod = outcome * (mod / 100);

       //Jackpot Logic
   if(jackpot > 0){
    outcomeMod = (10 * amt) * (mod/100);
    jackpot -= 1;
    customersArr.push(createCustomer(random(3)));
    jackpotEl.innerHTML = jackpot;
}

    moneyTotal += amt;
    custObj.cash -= amt;
    moneyTotal -= outcomeMod;
    custObj.cash += outcomeMod;
    var profit = amt - outcomeMod;
    moneyTotalEl.innerHTML = moneyTotal;

    console.log('Customer bet ' + amt + ' and won back ' + outcomeMod + ' and now has $' + custObj.cash + '. Your casino made $' + profit + '.');

    resultsPost.innerText = `You bet ${amt} with ${mod}% modifier and won ${outcomeMod}!`;
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

//increasers & decreasers

betReturnInc.addEventListener('click', () => {
    betReturnMod += 5;
    betReturnModEl.innerHTML = betReturnMod;
});

betReturnDec.addEventListener('click', () => {
    betReturnMod -= 5;
    if (betReturnMod < 5){
        betReturnMod = 5;
    }
    betReturnModEl.innerHTML = betReturnMod;
});

betAmountInc.addEventListener('click', () => {
    betAmount += 10;
    betAmountEl.innerHTML = betAmount;
});

betAmountDec.addEventListener('click', () => {
    betAmount -= 10;
    if(betAmount < 10){
        betAmount = 10;
    }
    betAmountEl.innerHTML = betAmount;
});

slotsInc.addEventListener('click', () => {
    slotsOwned += 1;
    moneyTotal -= 1000;
    slotsOwnedEl.innerHTML = slotsOwned;
    moneyTotalEl.innerHTML = moneyTotal;
});

jackpotInc.addEventListener('click', () => {
    jackpot += 1;
    jackpotEl.innerHTML = jackpot;
});

jackpotDec.addEventListener('click', () => {
    jackpot -= 1;
    if (jackpot < 0){
        jackpot = 0;
    }
    jackpotEl.innerHTML = jackpot;
});
