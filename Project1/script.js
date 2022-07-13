let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to loose yourself in the service of others"`,
    person: `Mahatma Gandhi`
},{
    quote: `"lorem ipsum"`,
    person: `IDK`
},{
    quote: `"If you every feel stuck in a coal mine look for diamonds"`,
    person: `Me`
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})