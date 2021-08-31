const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoute(data));
}

const displayQoute = quote => {
    // console.log(quote.quote)
    const qouteElement = document.getElementById('quotes');
    qouteElement.innerText = quote.quote;
}