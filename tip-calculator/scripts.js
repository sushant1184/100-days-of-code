var form = document.querySelector("#tip-calculator");
var percentTip = document.querySelector("#tip");
var totalAmount = document.querySelector("#amount");
var people = document.querySelector("#people");
var perPerson = document.querySelector("#per-person");

calculateTip = function() {
    
    var tipPercentage = parseInt(percentTip.value, 10)/100;

    var amountValue = parseFloat(amount.value, 2)

    var tipAmount = amountValue * tipPercentage;

    var total = amountValue + tipAmount;

    var perPersonAmount = (total / parseInt(people.value, 10));

    perPerson.textContent = "Each Person owes ₹" + perPersonAmount.toFixed(2).toString();

}

form.addEventListener('click', function(event){

    //Prevent Default Behaviour
    event.preventDefault();
    console.log("Prevent Default works");

    //Check if any input is empty
    if(tip.value.length < 1 || amount.value.length < 1 || people.value.length < 1) return;

    calculateTip();


})