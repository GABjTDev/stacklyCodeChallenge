import grid from "./grid.js";

export default async function getQuoteRandom(random){

    const API = `https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${random}&count=4`;
    const quotesRandom = await fetch(API)
                        .then(res => res.json())
                        .then(data => data);
    
    grid(quotesRandom.data);

}