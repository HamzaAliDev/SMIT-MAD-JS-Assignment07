let now = new Date();
let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
console.log(now);

document.getElementById('original-statement').innerHTML = now

function showOutput (value){
    document.getElementById('output-field').innerHTML = value
}

function handleNameToday() {
    let today = now.getDay()
    let todayName = dayList[today]

    showOutput(todayName)
}

function handlePassedDays() {
    let inputValue = document.getElementById('userinput').value
    let passedDay = null
    if(!inputValue){
        alert("Enter your Date of Birth")
    }else{
        let birthDate = new Date (inputValue)
        let currentDate = new Date();
        
        let dateDifference = currentDate - birthDate;
        passedDay = Math.floor(dateDifference/(1000 * 60 * 60 *24 ))
    }

    showOutput(passedDay);
    document.getElementById('userinput').value = ""
}

function handleNextBirthday(){
    let inputValue = document.getElementById('userinput').value
    let nextBirthday = null
    if(!inputValue){
        alert("Enter your Date of Birth")
    }else{
        let birthDate = new Date (inputValue)
        let currentDate = new Date();
        
        let dateDifference = birthDate - currentDate ;
       nextBirthday = Math.floor(dateDifference/(1000 * 60 * 60 *24 ))
    }

    showOutput(nextBirthday);
    document.getElementById('userinput').value = ""
}

function handleGreetUser() {
    let currentDate = new Date();
    let time = currentDate.getHours()
    if(time >= 1 && time <=4){
        showOutput("Good Night")
    }else if(time >=5 && time <=12){
        showOutput("Good Morning")
    }else if(time >=13 && time <=18)
        showOutput("Good Afternoon")
    else{
        showOutput("Good Night")
    }

}

function handleTime(){
    let today = new Date
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()

    // console.log(hour,minute,second);
    let output = "click time is " + hour +":" + minute +":" + second
    showOutput(output)
}
let calculatedTax = null
let price = null
let taxPercent = null
function handleTaxCalculation() {
     price = prompt("Enter Total Price")
     taxPercent = prompt("Enter percentage of tax")

     calculatedTax = price * taxPercent / 100

    showOutput("Amount of Tax is " + calculatedTax)
}

function handleTotalPrice() {
    let totalPrice = null
    if(price != null && taxPercent != null){
        totalPrice = Number(calculatedTax) + Number(price)
    }else{
        price = prompt("Enter Total Price")
        taxPercent = prompt("Enter percentage of tax")
   
        calculatedTax = price * taxPercent / 100
        totalPrice = Number(calculatedTax) + Number(price)       
    }
    showOutput("Total price is " + totalPrice)
}

function handleInputClear(){
    document.getElementById('userinput').value = ""
}

function handleClearBtn(){
    showOutput("")
}