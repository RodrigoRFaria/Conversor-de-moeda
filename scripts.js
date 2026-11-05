const convertButton = document.querySelector('.convert-button');
const currencyselect = document.querySelector('.currency-select');

function convertCurrency() {
    const inputCurrencyValue = document.querySelector('.currency-input').value;
    const toConverte = document.querySelector ('.Real');
    const converted = document.querySelector ('.Converted');

    console.log(currencyselect.value);
    const dolarToday = 5.25;
    const euroToday = 5.50;
    const libraToday = 6.20;
    const ieneToday = 0.038;

    const convertedValue = inputCurrencyValue / dolarToday;

    if (currencyselect.value == "USD") {
        converted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday);
    
    }
    if (currencyselect.value == "EUR") {
        converted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday);
    
    }
    if (currencyselect.value == "GBP") {
        converted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday);
    
    }
    if (currencyselect.value == "JPY") {
        converted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
    }).format(inputCurrencyValue / ieneToday);
    }

    toConverte.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
    

    console.log(convertedValue);
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if (currencyselect.value == "USD") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolar.png";
    }

    if (currencyselect.value == "EUR") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    if (currencyselect.value == "GBP") {
        currencyName.innerHTML = "Libra Esterlina";
        currencyImage.src = "./assets/libra.png";
    }

    if (currencyselect.value == "JPY") {
        currencyName.innerHTML = "Iene Japonês";
        currencyImage.src = "./assets/iene.png";
    }

    convertCurrency();
}


currencyselect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertCurrency);