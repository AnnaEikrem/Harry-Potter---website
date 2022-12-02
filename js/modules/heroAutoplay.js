export default function heroAutoplay() {
	let currentIndex = 0;
	const carousel = document.querySelector('.main__hero-images')
	const carouselImages = document.querySelectorAll('.main__hero-image');

	if (carousel) {
		setInterval(autoplayCarousel, 5000);
	}

	function autoplayCarousel() {
		increaseCarouselSlideIndex();
		renderCarouselHTML();
	}

	function increaseCarouselSlideIndex() {
		if (currentIndex < carouselImages.length - 1)  {
			currentIndex += 1;
		} else {
			currentIndex = 0;
		}
	}

	function renderCarouselHTML() {
		for (const image of carouselImages) {
			image.classList.remove('main__hero-image--visible');
		}
		
		carouselImages[currentIndex].classList.add('main__hero-image--visible');
	}

}