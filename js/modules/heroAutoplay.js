export default function heroAutoplay() {

	// Data
	let currentIndex = 0;

	// Variables
	const heroCarousel = document.querySelector('.main__hero-images')
	const heroImages = document.querySelectorAll('.main__hero-image');

	if (heroCarousel) {
		setInterval(autoplayCarousel, 5000);
	}

	// Event handler
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