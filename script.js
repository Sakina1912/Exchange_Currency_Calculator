const currencyOne = document.getElementById('currency-one')
const amountOne = document.getElementById('amount-one')
const currencyTwo = document.getElementById('currency-two')
const amountTwo = document.getElementById('amount-two')
const swap = document.getElementById('swap')
const showRate = document.getElementById('rate-show')



function calculate(){
    fetch(`https://v6.exchangerate-api.com/v6/95c6389d227b8eebfa0cfb57/latest/USD`)
    .then(res => res.json())
    .then(data => {
        let getRateValue = data.conversion_rates[currencyTwo.value]
        console.log(currencyOne.value)
        showRate.innerText= `1 ${currencyOne.value} = ${getRateValue} ${currencyTwo.value}`
        amountTwo.value = (amountOne.value * (getRateValue)).toFixed(2)
    })

}

calculate()


currencyOne.addEventListener('change',calculate)
currencyTwo.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)
amountTwo.addEventListener('input',calculate)
swap.addEventListener('click',()=>{
    const temp  = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = temp
    calculate()
})