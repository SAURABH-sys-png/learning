import { getData } from "./fetch.js";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1";

// ERROR FIX #1: Changed from {} to [] - myObject should be an array, not an empty object
let myObject = [];
async function main() {
  try {
    myObject = await getData(url);
    console.log("Packet Received");
    // ERROR FIX #2: Moved updateUI Promise inside main() after data is fetched
    updateUIData();
  } catch (err) {
    console.log("Failed to get data in main:", err);
  }
}

// Call main() immediately on load
main();

// Refresh data every 1 second (1000 milliseconds)
setInterval(main, 1000);

let bitcoin = document.getElementById("bitcoin");
let bitcoinChange = document.getElementById("bitcoin-change");
let ethereum = document.getElementById("ethereum");
let ethereumChange = document.getElementById("ethereum-change");
let dogecoin = document.getElementById("dogecoin");
let dogecoinChange = document.getElementById("dogecoin-change");
let cardano = document.getElementById("cardano");
let cardanoChange = document.getElementById("cardano-change");
let solana = document.getElementById("solana");
let solanaChange = document.getElementById("solana-change");
let ripple = document.getElementById("ripple");
let rippleChange = document.getElementById("ripple-change");

// ERROR FIX #2: Moved Promise into a function that's called after data is fetched
function updateUIData() {
  let updateUI = new Promise((resolve, reject) => {
    if (myObject.length > 0) {
      resolve("UI Updated Successfully");
    } else {
      reject("Failed to update UI: Data not available");
    }
  });

  updateUI
    .then((message) => {
      console.log(message);
      bitcoin.textContent = `$${myObject[0].current_price}`;
      // ERROR FIX #3: Added logic to check if price change is positive or negative
      bitcoinChange.textContent = `${myObject[0].price_change_percentage_24h >= 0 ? "↑" : "↓"} ${myObject[0].price_change_percentage_24h.toFixed(2)}%`;
      ethereum.textContent = `$${myObject[1].current_price}`;
      ethereumChange.textContent = `${myObject[1].price_change_percentage_24h >= 0 ? "↑" : "↓"} ${myObject[1].price_change_percentage_24h.toFixed(2)}%`;
      cardano.textContent = `$${myObject[2].current_price}`;
      cardanoChange.textContent = `${myObject[2].price_change_percentage_24h >= 0 ? "↑" : "↓"} ${myObject[2].price_change_percentage_24h.toFixed(2)}%`;
      solana.textContent = `$${myObject[3].current_price}`;
      solanaChange.textContent = `${myObject[3].price_change_percentage_24h >= 0 ? "↑" : "↓"} ${myObject[3].price_change_percentage_24h.toFixed(2)}%`;
      ripple.textContent = `$${myObject[4].current_price}`;
      rippleChange.textContent = `${myObject[4].price_change_percentage_24h >= 0 ? "↑" : "↓"} ${myObject[4].price_change_percentage_24h.toFixed(2)}%`;
    })
    .catch((error) => {
      console.error(error);
    });
}
