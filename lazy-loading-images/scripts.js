var images = document.querySelectorAll('.lazy-load');

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

var loadImage = function(event) {

    //Check each image to see if its in the viewport
    for(var i = 0; i < images.length; i++) {
        if(isInViewport(images[i])) {

            //If image is not in the viewport then continue
            if(!isInViewport(images[i])) continue;

            //Get the image url
            var img = images[i].getAttribute('data-image');
            if(!img) continue;

            //Add images to the DOM
            images[i].innerHTML = '<img src="' + img + '">';

            //Create the caption
            var captionText = images[i].getAttribute('data-caption');
            if(captionText) {

                //Insert the caption into the DOM.
                var caption = document.createElement('caption');
                caption.textContent = captionText;
                var img = images[i].querySelector('img');
                images[i].insertBefore(caption, img.nextSibling);
            }

            //After the image loads remove the data-image attribute
            images[i].removeAttribute('data-image');
        }
    }

};

//Load any images in the viewport on page load
loadImage();

//Listen to the scroll event
window.addEventListener('scroll', loadImage,  false);