import { getData } from "./fetch.js";

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1';

async function main() {
  
  
  try {
    const myObject = await getData(url);
    console.log("Here is your parsed object:", myObject[0].id);
  } catch (err) {
    console.log("Failed to get data in main:", err);
  }
}

main();