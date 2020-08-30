var apiData = [
    {
        name: 'Rufus',
        breeds: [
            'Lab',
            'German Shepard',
            'Border Collie'
        ],
        age: 'Adult',
        size: 'Medium',
        gender: 'Male',
        details: 'No Cats, No Dogs',
        photo: 'img/rufus.jpg'
    },
    {
        name: 'kylie jane',
        breeds: [
            'Shih Tzu'
        ],
        age: 'Puppy',
        size: 'Small',
        gender: 'Female',
        details: 'Neutered',
        photo: 'img/kylie.jpg'
    },
    {
        name: 'jacque ',
        breeds: [
            'Chihuahua',
            'Rat Terrier'
        ],
        age: 'Senior',
        size: 'Small',
        gender: 'Male',
        details: 'No Cats, No Dogs, Neutered, Special Medical Needs',
        photo: 'img/jacque.jpg'
    },
    {
        name: 'Elsa',
        breeds: [
            'Irish Wolfhound',
            'Wirehaired Terrier',
            'Staffordshire Terrier'
        ],
        age: 'Adult',
        size: 'Extra Large',
        gender: 'Female',
        details: 'Neutered',
        photo: 'img/elsa.jpg'
    },
    {
        name: 'Colt',
        breeds: [
            'Staffordshire Terrier',
            'Dalmation',
            'Lab'
        ],
        age: 'Puppy',
        size: 'Large',
        gender: 'Male',
        details: '',
        photo: 'img/colt.jpg'
    }
];

// Create a list of available breeds, and how many of each breed there are
var getSummary = function () {
    // Template
    // <h2>Available Breeds</h2>
    // <ul>
    // 		<li>{Breed Name} ({Breed Quantity})</li>
    // 		<li>Ex. Lab (2)</li>
    // </ul>

    //Get dog breeds and quantity
    var dogBreeds = apiData.reduce(function(breeds, dog){
        dog.breeds.forEach(function(breed) {
            if(breeds[breed]) {
                breeds[breed]++
            } else {
                breeds[breed] = 1;
            }
        })
        return breeds;
    }, {})

    //Create our markup

    var html = "";
    for(key in dogBreeds) {
        if(dogBreeds.hasOwnProperty(key)) {
            html += '<li class="list-group-item d-flex justify-content-between align-items-center">' +key+ 
            '<span class="badge badge-primary badge-pill">' +dogBreeds[key]+ '</span></li>'
        }
    }

    return '<h2 class="text-center breeds-title">Available Breeds</h2><ul class="list-group breeds-list">' +html+ '</ul>';
};

// Create a list of adoptable dogs
var getDogs = function () {
    // Template
    // <h2>{Dog Name}</h2>
    // <p><img alt="A photo of {Dog Name}" src="photo.jpg"></p>
    //
    // <p>
    // 		Age: {age}<br>
    // 		Size: {size}<br>
    // 		Gender: {gender}<br>
    // 		Breeds: {breed1}, {breed2}
    // </p>
    //
    // <strong>Other Details:</strong>
    // <ul>
    // 		<li>{detail1: ex. No Cats}</li>
    // </ul>
    
    return apiData.map(function(dog) {
        var html = '<div class="card"><h2 class="text-center">' + dog.name + '</h2>' +
        '<div><img alt="A photo of ' + dog.name + '" src="'+ dog.photo +'" class="img-thumbnail thumb"></div>' +
        '<p class="card-text">' +
        'Age: '  +dog.age+ '<br>'+
        'Size: ' +dog.size+ '<br>'+
        'Gender: ' +dog.gender+  '<br>'+
        'Breeds: ' +dog.breeds.join(', ')+  '<br>'+
        '</p>' +
        '<p class="card-text"><strong>Other Details</strong>' +
        '<ul>' +
        dog.details.split(', ').map(function (detail) {
            if(detail.length < 1) return '<li><em>No additional details</em></li>';
            return '<li>' +detail+ '</li>';
        }).join('') +
        '</ul></p></div>';
        return html;

    }).join('');
};

// Load list of adoptable dogs into the DOM
var dogList = document.querySelector('#dogs');
dogList.innerHTML = getSummary() + getDogs()