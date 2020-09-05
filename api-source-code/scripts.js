//Get the app element to render our content into
var app = document.querySelector('#app');
/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
var sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
};

/**
 * Render a message into the DOM if there are no skwaks
 */

 var renderNoSkwaks = function() {
    app.innerHTML = '<p>Sorry Mate! This user has no skwaks...</p>';

 };

/**
 * Render skwaks into the DOM
 * @param {Object} data The API data
 */

var renderSkwaks = function(data) {

    //If there are no skwaks, render a message into the UI
    if(data.skwaks.length < 1) {
        renderNoSkwaks();
        return;
    }

    //Render user skwaks in UI
    app.innerHTML =
    '<h1>'+ sanitizeHTML(data.username) +'\'s skwaks</h1>' +
    '<div class="skwaks">' +
    data.skwaks.map(function(skwak) {
        var html ='<article class="skwak">' +
        '<a class="skwak-date" href="' +sanitizeHTML(skwak.link) +'">' + sanitizeHTML(skwak.date) +
          '</a>' +
          '<div class="skwak-content">' + sanitizeHTML(skwak.content) + '</div>' +
        '</article>';
        return html;
    }).join('') +
    '</div>'+
    '<p><em>Powered by ' + sanitizeHTML(data.service) + '</em></p>';

};

fetch('https://vanillajsguides.com/api/skwak.json').then(function(response) {
    if(response.ok) {
        return response.json();
    }

    return Promise.reject(response);
}).then(function(data) {
    console.log(data);
    renderSkwaks(data);
}).catch(function(error){
    console.warn(error);
    renderNoSkwaks();
})