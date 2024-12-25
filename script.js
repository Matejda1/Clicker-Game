// Need Let
let bitcoin = 0;
let bpc = 1;
let bps = 0;

// Need Const
const bitcoinsText = document.querySelector("#bitcoins");
const bpcText = document.querySelector("#bpc");
const bpsText = document.querySelector("#bps");

// Upgrade for Add Bitcoin every click

// First Upgrade Let
let upgrade1Add = 1;
let upgrade1Cost = 25;
let upgrade1Owned = 0;

// Second Upgrade Let
let upgrade2Add = 5;
let upgrade2Cost = 75;
let upgrade2Owned = 0;

// First Upgrade Const
const upgrade1AddText = document.querySelector("#upgrade1Add");
const upgrade1CostText = document.querySelector("#upgrade1Cost");
const upgrade1OwnedText = document.querySelector("#upgrade1Owned");

// Second Upgrade Const
const upgrade2AddText = document.querySelector("#upgrade2Add");
const upgrade2CostText = document.querySelector("#upgrade2Cost");
const upgrade2OwnedText = document.querySelector("#upgrade2Owned");

function addBitcoin() {
    bitcoin += bpc;
    bitcoinsText.innerText = bitcoin.toFixed(1);
}

// Function for Bpc
function upgrade1() {
    if (bitcoin >= upgrade1Cost) {
        bitcoin -= upgrade1Cost;
        upgrade1Owned += 1;
        bpc += upgrade1Add;
        upgrade1Add *= 1.1;
        upgrade1Cost *= 1.5;
        upgrade1CostText.innerText = upgrade1Cost.toFixed(1);
        upgrade1AddText.innerText = upgrade1Add.toFixed(1);
        bpcText.innerText = bpc.toFixed(1);
        upgrade1OwnedText.innerText = upgrade1Owned;
        bitcoinsText.innerText = bitcoin.toFixed(1);
    }
}
function upgrade2() {
    if (bitcoin >= upgrade2Cost) {
        bitcoin -= upgrade2Cost;
        upgrade2Owned++;
        bpc += upgrade2Add;
        upgrade2Add *= 1.1;
        upgrade2Cost *= 1.5;
        upgrade2CostText.innerText = upgrade2Cost.toFixed(1);
        upgrade2AddText.innerText = upgrade2Add.toFixed(1);
        bpcText.innerText = bpc.toFixed(1);
        upgrade2OwnedText.innerText = upgrade2Owned;
        bitcoinsText.innerText = bitcoin.toFixed(1);
    }
}

// Upgrade for Add Bitcoin every second

// Add bitcoin every second
setInterval(() => {
    bitcoin += bps;
    bitcoinsText.innerText = bitcoin.toFixed(1);
}, 1000);

// First upgrade Let
let upgrade1AddS = 1;
let upgrade1OwnedS = 0;
let upgrade1CostS = 150;

// First upgrade Const
const upgrade1AddTextS = document.querySelector("#upgrade1AddS");
const upgrade1OwnedTextS = document.querySelector("#upgrade1OwnedS");
const upgrade1CostTextS = document.querySelector("#upgrade1CostS");

// Function for Bps

function upgrade1S() {
    if (bitcoin >= upgrade1AddS) {
        bitcoin -= upgrade1CostS;
        bps += upgrade1AddS;
        upgrade1OwnedS++;
        upgrade1AddS *= 1.05;
        upgrade1CostS *= 1.5;
        upgrade1CostTextS.innerText = upgrade1CostS.toFixed(1);
        upgrade1AddTextS.innerText = upgrade1AddS.toFixed(1);
        bpsText.innerText = bps.toFixed(1);
        upgrade1OwnedTextS.innerText = upgrade1OwnedS;
        bitcoinsText.innerText = bitcoin.toFixed(1);
    }
}