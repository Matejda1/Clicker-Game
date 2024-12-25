let bitcoin = 0;
let bpc = 1;
let bps = 0;

let upgrade1Add = 1;
let upgrade1Cost = 10;
let upgrade1Owned = 0;

const bitcoinsText = document.querySelector("#bitcoins");
const bpcText = document.querySelector("#bpc");
const bpsText = document.querySelector("#bps");

const upgrade1AddText = document.querySelector("#upgrade1Add");
const upgrade1CostText = document.querySelector("#upgrade1Cost");
const upgrade1OwnedText = document.querySelector("#upgrade1Owned");


function addBitcoin() {
    bitcoin += bpc;
    bitcoinsText.innerText = bitcoin.toFixed(1);
}

function upgrade1() {
    if (bitcoin >= upgrade1Cost) {
        bitcoin -= upgrade1Cost;
        upgrade1Owned += 1;
        bpc += upgrade1Add;
        upgrade1Add *= 1.1;
        upgrade1Cost *= 1.1;
        upgrade1CostText.innerText = upgrade1Cost.toFixed(1);
        upgrade1AddText.innerText = upgrade1Add.toFixed(1);
        bpcText.innerText = bpc.toFixed(1);
        upgrade1OwnedText.innerText = upgrade1Owned;
        bitcoinsText.innerText = bitcoin;
    }
}