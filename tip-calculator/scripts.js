var form = document.querySelector("#tip-calculator");
var percentTip = document.querySelector("#tip");
var totalAmount = document.querySelector("#amount");
var people = document.querySelector("#people");
var perPerson = document.querySelector("#per-person");

calculateTip = function() {
    
    var tipPercentage = parseFloat(percentTip.value/100, 2);

    var tipAmount = totalAmount.value * tipPercentage;

    var perPersonTip = (tipAmount / people.value).toFixed(2);

    perPerson.textContent = "Each Person gets $" + perPersonTip + " tip"

}

form.addEventListener('click', function(event){

    //Prevent Default Behaviour
    event.preventDefault();
    console.log("Prevent Default works");

    //Check if any input is empty
    if(tip.value.length < 1 || amount.value.length < 1 || people.value.length < 1) return;

    calculateTip();


})