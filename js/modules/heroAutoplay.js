export default function heroAutoplay() {
	let currentIndex = 0;
	const carousel = document.querySelector('.main__carousel-images')
	const carouselImages = document.querySelectorAll('.main__carousel-image');

	if (carousel) {
		setInterval(autoplayCarousel, 4000);
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
			image.classList.remove('carousel__image--visible');
		}

		// setTimeout(() => {

		// }, 500)

		// setTimeout(() => {

		// }, 3500)

		carouselImages[currentIndex].classList.add('carousel__image--visible');
	}

}