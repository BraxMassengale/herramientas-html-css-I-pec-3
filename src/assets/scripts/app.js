const stoicQuote = require('stoic-quotes');
const quoteBlock = document.querySelector('#quote');

let quote = stoicQuote("marcus");
quoteBlock.innerText = quote.author + ': ' + quote.quote;

