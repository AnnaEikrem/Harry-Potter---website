export default function Hero() {
	let currentSlideindex = 0;

	const heroCarousel = document.querySelector('.main__carousel-section');
	const carouselImages = document.querySelector('.main__carousel-image');
	const carouselPrevious = document.querySelector('.carousel__button-previous');
	const carouselNext = document.querySelector('.carousel__button-next');


	if (heroCarousel) {
		carouselPrevious.addEventListener('click', handleCarouselPreviousClick);
		carouselNext.addEventListener('click', handleCarouselNextClick);
	}
}