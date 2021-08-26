const loadQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQoute(data));
}

const displayQoute = qoute => {
    // console.log(qoute.qoute)
    const qouteElement = document.getElementById('quote');
    qouteElement.innerText = qoute.qoute;
}