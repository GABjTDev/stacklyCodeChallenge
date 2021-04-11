import grid from "./grid.js";
import showError from "./showError.js";

export default async function getQuoteAuthor(author){

    try{

        const API = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=4`;
        const quotes = await fetch(API)
                        .then(res => res.json())
                        .then(data => data);

        grid(quotes.data);
    }catch(e){
        showError();
    }

    
}