let rowfirst = document.getElementById("rowfirst");
let rowsecond = document.getElementById("rowsecond");
let rowthird = document.getElementById("rowthird");

async function fun(){

try {
    let response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd");
    let data = await response.json();
    rowfirst.innerHTML = data.bitcoin.usd;
    rowsecond.innerHTML = data.ethereum.usd;
    rowthird.innerHTML = data.dogecoin.usd;
} catch (error) {
    console.error('Error fetching data:', error);
}
}

fun();
