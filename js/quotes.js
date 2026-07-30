const quotes = [

    "Some journeys end, but memories stay forever.",

    "Where strangers became family.",

    "Thank you for every laugh we shared.",

    "Every challenge made us stronger.",

    "This isn't goodbye.",

    "See you again, Clover 🍀"

];

let currentQuote = 0;

const quoteElement = document.getElementById("quote");

function changeQuote(){

    gsap.to(quote,{

        opacity:0,

        duration:0.6,

        onComplete(){

            currentQuote = (currentQuote + 1) % quotes.length;

            quote.textContent=quotes[currentQuote];

            gsap.to(quote,{

                opacity:1,

                duration:0.6

            });

        }

    });

}

setInterval(changeQuote,7000);