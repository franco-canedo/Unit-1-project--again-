/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*
Going to "Meets expectations" grade
*/


//Array of quotes
var quotes = [
  {quote: "There are no secrets to success. It is the result of preparation, hard work and learning from failure.",
   source: "Colin Powell"
  },
  {quote:"There is only one thing that makes a dream impossible to achieve: the fear of failure.", 
   source: "Paulo Coelho",
   year: "2002"
  },
  {quote: "Don't worry about what others are doing. Do you", 
   source: "Russell Simmons"
  },
  {quote: "Stay Strong. Even when it feels like everything's falling apart.", 
   source: "Anonymous"
  },
  {quote: "Obstacles are those things you see when you take your eyes off the goal.", 
   source: "Henry Ford",
   citation: "Newspaper" 
  }
];

//Fuction to get a random number.
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var getQuote = quotes[randomNumber];
  return getQuote;
}

//function to print quote.
function printQuote() {
  var randomQuote = getRandomQuote();
  var html = '';
  html += '<p class = "quote">' + randomQuote.quote + '</p>';
  html += '<p class = "source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' +  randomQuote.citation + '</span>';

  }
  if (randomQuote.year) {
    html += '<span class="year">' +  randomQuote.year + '</span>';
  }
  html += '</p>';
  var div = document.getElementById('quote-box');
    div.innerHTML = html;
  
}



//D not touch this code. 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


