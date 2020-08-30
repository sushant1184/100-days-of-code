    ;(function () {
        // Get our lazy load images
    var images = document.querySelectorAll('.lazy-load');   

    // Determine if an element is in the viewport
    var isInViewport = function (elem) {
        var distance = elem.getBoundingClientRect();
        return (
            distance.top >= 0 &&
            distance.left >= 0 &&
            distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Insert caption into the DOM
    var addCaption = function (img, text) {
        if(!text) return;
        var caption = document.createElement('caption');
        caption.innerHTML = text;
        img.parentNode.insertBefore(caption, img.nextSibling);
    };

    // Load our images
    var loadImages = function () {

        // Loop through each lazy load image
        for (var i = 0; i < images.length; i++) {

            // Check if the image is in the viewport
            if (isInViewport(images[i])) {

                // Make sure the image has a data-image attribute and hasn't already been loaded
                if (!images[i].hasAttribute('data-image')) continue;

                // Load the image
                images[i].innerHTML = '<img src="' + images[i].getAttribute('data-image') + '">';

                // Add a caption
                var img = images[i].querySelector('img');
                var text = images[i].getAttribute('data-caption');
                addCaption(img, text);

                // Remove the [data-image] attribute from the placeholder
                images[i].removeAttribute('data-image');

            }

        }

    };

     // Listen for scroll events
     window.addEventListener('scroll', loadImages, false);

    // Load images on page load
    loadImages();
    })();
    
    