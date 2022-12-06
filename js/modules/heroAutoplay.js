export default function heroAutoplay() {
	let currentIndex = 0;
	const heroCarousel = document.querySelector('.main__hero-images')
	const heroImages = document.querySelectorAll('.main__hero-image');


	/** Function will run if: the parameter is present
	 * @param {string} heroCarousel 
	 */
	if (heroCarousel) {
		setInterval(autoplayCarousel, 5000);
	}

	/** Function will increase slide index of image array, and render the HTML*/
	function autoplayCarousel() {
		increaseCarouselSlideIndex();
		renderCarouselHTML();
	}

	function increaseCarouselSlideIndex() {
		if (currentIndex < heroImages.length - 1)  {
			currentIndex += 1;
		} else {
			currentIndex = 0;
		}
	}

	function renderCarouselHTML() {
		for (const image of heroImages) {
			image.classList.remove('main__hero-image--visible');
		}
		
		heroImages[currentIndex].classList.add('main__hero-image--visible');
	}

}