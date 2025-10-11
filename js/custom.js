(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});


	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();


	var tinyslier = function() {

		var heroSlider = document.querySelectorAll('.hero-slide');
		var propertySlider = document.querySelectorAll('.property-slider');
		var imgPropertySlider = document.querySelectorAll('.img-property-slide');
		var testimonialCenter = document.querySelectorAll('.testimonial-center');
		

		if ( heroSlider.length > 0 ) {
			var tnsHeroSlider = tns({
				container: '.hero-slide',
				mode: 'carousel',
				speed: 700,
				autoplay: true,
				controls: false,
				nav: false,
				autoplayButtonOutput: false,
				controlsContainer: '#hero-nav',
			});
		}


		if ( imgPropertySlider.length > 0 ) {
			var tnsPropertyImageSlider = tns({
				container: '.img-property-slide',
				mode: 'carousel',
				speed: 700,
				items: 1,
				autoplay: true,
				controls: false,
				nav: true,
				autoplayButtonOutput: false
			});
		}

		if ( propertySlider.length> 0 ) {
			var tnsSlider = tns({
				container: '.property-slider',
				mode: 'carousel',
				speed: 700,
				items: 3,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#property-nav',
				responsive: {
					0: {
						items: 1
					},
					700: {
						items: 2
					},
					900: {
						items: 3
					}
				}
			});
		}



		if ( testimonialCenter.length> 0 ) {
			var testimonialSlider = tns({
				container: '#testimonial-center',
				items: 1,
				mode: 'carousel',
				slideBy: 'page',
				nav: true,
				controls: true,
				autoplay: true,
				autoplayButtonOutput: false,
				controls: true,
				gutter: 50,
				slideBy: 1,
				edgePadding: 0,
				center: true,
				controlsContainer: '#testimonial-nav',
				autoplayHoverPause: true,
				loop: true,
				swipeAngle: false,
				speed: 700,

				responsive: {
					350: {
						gutter: 10,
						edgePadding: 0,
						items: 1,
					},
					500: {
						gutter: 20,
						edgePadding: 0,
						items: 1,
					},
					700: {
						gutter: 50,
						edgePadding: 20,
						items: 2,
					},
					1000: {
						gutter: 50,
						edgePadding: 50,
						items: 2,
					}
				}

			});
		}

	}
	tinyslier();

	
	var lightboxVideo = GLightbox({
		selector: '.glightbox'
	});

})()


document.addEventListener('DOMContentLoaded', function() {
  const selectorItems = document.querySelectorAll('.selector-item');
  const carouselItems = document.querySelectorAll('.carousel-item');
  
  // Function to trigger the hover effect on carousel item
  function triggerHover(itemId) {
    const item = document.querySelector(`.carousel-item[data-id="${itemId}"]`);
    // Remove existing hover classes from all items
    carouselItems.forEach(item => item.classList.remove('expand-on-hover-active'));
    // Add hover effect to the selected item
    item.classList.add('expand-on-hover-active');
  }

  // Adding click event listeners for the selector items
  selectorItems.forEach(selector => {
    selector.addEventListener('click', function() {
      const targetId = selector.getAttribute('data-target');
      
      // Update text color to indicate the active selection
      selectorItems.forEach(item => item.querySelector('h5').classList.remove('text-outlined'));
      selector.querySelector('h5').classList.add('text-outlined');
      
      // Trigger hover effect for the corresponding carousel item
      triggerHover(targetId);
    });
  });
});


// Initialize Tiny Slider
const slider = tns({
	container: '.my-slider',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false,
	speed: 400,
	loop: true,
  });
  
  // Select custom navigation items
  const navItems = document.querySelectorAll('.carousel-nav-item');
  
  // Add click event listener to custom navigation
  navItems.forEach((item, index) => {
	item.addEventListener('click', () => {
	  // Update Tiny Slider to the selected index
	  slider.goTo(index);
  
	  // Update active class for navigation items
	  navItems.forEach((nav) => nav.classList.remove('active'));
	  item.classList.add('active');
	});
  });
  
  // Sync Tiny Slider with custom navigation on slide change
  slider.events.on('indexChanged', (info) => {
	const currentIndex = info.index % navItems.length; // Ensure it's within bounds
	navItems.forEach((nav) => nav.classList.remove('active'));
	navItems[currentIndex].classList.add('active');
  });
  

   // Clientes slider


document.addEventListener('DOMContentLoaded', function () {
  tns({
    container: '.clients-slider',
    items: 4,
    gutter: 24,
    center: true,
    loop: true,
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controls: false,
    nav: false,
    speed: 400,
    responsive: {
      0:   { items: 2, gutter: 12, center: false },
      576: { items: 3, gutter: 16, center: true  },
      992: { items: 4, gutter: 24, center: true  }
    }
  });
});



     // Modal Script



  	document.querySelectorAll('.carousel-image').forEach(img => {
	  img.addEventListener('click', function () {
		document.getElementById('modalImage').src = this.src;
	  });
	});