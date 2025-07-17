const sum = (a,b)=>{
    return a + b
}

module.exports = {sum};

console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromEuroToDollar = (euros) =>{
    let usd = euros * oneEuroIs.USD
    return usd
}
const fromDollarToYen = (dollars) =>{
    let yen = dollars * oneEuroIs.JPY
    return yen
}
const fromYenToPound = (yen) =>{
    let pound = yen * oneEuroIs.GBP
    return pound
}

module.exports = {fromYenToPound}

module.exports = {fromDollarToYen}

module.exports = {fromEuroToDollar}
