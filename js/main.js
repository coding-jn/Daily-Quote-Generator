// Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector('button').addEventListener('click', getQuote)

function getQuote() {
    let category = document.querySelector('#categories').value
    const quoteUrl = `https://quotes.rest/qod.json?category=${category}`

    fetch(quoteUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const quote = `"${data.contents.quotes[0].quote}"`
            const author = `- ${data.contents.quotes[0].author}`
            const display = `${quote} ${author}`
            const speechUrl = `https://api.voicerss.org/?key=1234567890QWERTY&hl=en-us&v=mary&src=${display}`
            document.querySelector('#display').innerHTML = `${quote}<br><br>${author}`
            fetch(speechUrl)
                .then(response => {
                	console.log(response.url);
                    document.querySelector('iframe').src = `${response.url}&autoplay=1`
                })
                .catch(err => {
                	console.error(err);
                });
        })
        .catch(err => {
            console.log('error')
        })

}
