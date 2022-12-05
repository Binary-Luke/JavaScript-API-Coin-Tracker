
// My application will only work if you have a browser extension disabling CORS


// Prepare my keys

const baseUrl = "https://api.coinranking.com/v2/coins"
const apiKey = "coinranking09a2f24559c2d7bfd45dad2047f57e78be06abe9d76dbcf6"

// fetch information from the API
fetch(`${baseUrl}`,{
    method: "GET",
    headers:{
        'Content-Type': 'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }

    // happy case - display our coin values directly to the screen
}).then((response) => {
    if(response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins)

            let coinsData = json.data.coins

            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }

            // live data for our table
            coinsData.forEach((coin) => {
                cryptoCoins += '<tr>'
                cryptoCoins += `<td> ${coin.name} </td>`;
                cryptoCoins += `<td> ${coin.symbol} </td>`;
                cryptoCoins += `<td> ${coin.rank} </td>`;
                let usd = parseFloat(coin.price).toFixed(2)
                cryptoCoins += `<td>$ ${usd} </td>`;
                cryptoCoins += `<td> ${coin.btcPrice} </td>`;
                cryptoCoins += `<td> ${coin.uuid} </td>`; "<tr>"
            })
            document.getElementById("data").innerHTML = cryptoCoins
        })
    }

    // sad case -- debug
}).catch((error) => {
    console.log(error)
})

let button_display = document.getElementById('quote')

button.addEventListener('click', function(){
    button_display.innerHTML = '"The most important thing to do if you find yourself in a hole is to stop digging." - Warren Buffet'
    
})
