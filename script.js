let bill = document.querySelector(".bill")
let tip = document.querySelector(".tip")
let button = document.querySelector("button")
console.log(button);

let total = document.querySelector(".total")

button.addEventListener("click",()=>{

    let billAmount = parseFloat(bill.value);
    let tipPercentage = parseFloat(tip.value);
    console.log(billAmount,tipPercentage);
    


    let amount = billAmount*(tipPercentage/100)
    amount += billAmount

    total.textContent = amount;
})
