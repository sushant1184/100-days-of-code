//Select all the inputs
var inputs = document.querySelectorAll('input, textarea');

//Get any existing saved form data from the local storage
var saved = localStorage.getItem('formAutoSaveData');

//If there are saved fields, load them
if(saved) {

    //Convert back to an object
    saved = JSON.parse(saved);

//Loop through each input and load data from local storage
for(var i=0; i<inputs.length; i++) {

    //Check if there's any saved data in localstorage 
    var val = saved[inputs[i].id]
    if(!val) continue;

    //If there's saved data load in to the current inputs
    inputs[i].value =val;
}
}



//Listen for form input event
document.addEventListener('input', function(event) {

    //Get any existing saved form data from local storage
    var saved = localStorage.getItem('formAutoSaveData')

    //If there's saved data parse it
    //Otherwise, create a new object
    saved= saved ? JSON.parse(saved) : {};

    //Push the field data to the saved data object
    saved[event.target.id] = event.target.value;

    //Save our data back to local storage
localStorage.setItem('formAutoSaveData', JSON.stringify(saved));

}, false)