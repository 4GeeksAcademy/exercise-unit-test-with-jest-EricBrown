const sum = (a,b)=>{
    return a + b
}


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

module.exports = {sum , fromYenToPound , fromDollarToYen, fromEuroToDollar};




