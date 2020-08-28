			document.addEventListener('click', function(event) {
			
				//Only run for toggle class
				if(!event.target.classList.contains("accordion-toggle")) return;

				//Get Content
				var content = document.querySelector(event.target.hash);
				if(!content) return;

				//Prevent Default Link Behaviour
				event.preventDefault();

				//If content is already open then close it
				if(content.classList.contains("active")) {
					content.classList.remove("active");
					return;
				}

				//Get All Active content areas and hide them
				var openContent = Array.prototype.slice.call(document.querySelectorAll(".accordion-content.active"));
				openContent.forEach(function(content) {
					content.classList.remove("active");
				});

				//Toggle visibility
				content.classList.toggle("active");
				
			}, false)
