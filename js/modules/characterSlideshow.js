export default function characterSlideshow() {
	let currentSlideIndex = 0;

	const slideshow = document.querySelector('.main__slideshow');
	const slideshowSlides = document.querySelectorAll('.slideshow__card');
	const buttonPrevious = document.querySelector('.slideshow__button-previous');
	const buttonNext = document.querySelector('.slideshow__button-next');
	const buttonDots = document.querySelectorAll('.slideshow__button-dot');


	/* Event listeners */
	if (slideshow) {
		buttonPrevious.addEventListener('click', handleButtonPreviousClick);
		buttonNext.addEventListener('click', handleButtonNextClick);
		window.addEventListener('keyup', handleWindowKeyUp);
	}


	for (let index = 0; index < buttonDots.length; index += 1) {
		buttonDots[index].addEventListener('click', event => {
			handlebuttonDotClick(event, index);
		});
	}

	/* event handlers */
	function handleButtonPreviousClick(event) {
		decreaseCurrentSlideIndex();
		renderHTML();
	}

	function handleButtonNextClick(event) {
		increaseCurrentSlideIndex();
		renderHTML();
	}

	function handleWindowKeyUp(event) {
		if (event.key === 'ArrowLeft') {
			decreaseCurrentSlideIndex();
			renderHTML();
		} else if (event.key === 'ArrowRight') {
			increaseCurrentSlideIndex();
			renderHTML();
		}
	}

	function handlebuttonDotClick(event, index) {
		changeCurrentSlideIndex(index);
		renderHTML();
	}

	function decreaseCurrentSlideIndex() {
		if (currentSlideIndex > 0) {
			currentSlideIndex -= 1;
		} else {
			currentSlideIndex = slideshowSlides.length -1;
		};
	}

	function increaseCurrentSlideIndex() {
		if (currentSlideIndex < slideshowSlides.length - 1) {
			currentSlideIndex += 1;
		} else {
			currentSlideIndex = 0;
		}
	}

	function changeCurrentSlideIndex(index) {
		currentSlideIndex = index;
	}

	/* Updates HTML */
	function renderHTML() {
		for (const slide of slideshowSlides) {
			slide.classList.remove('slideshow__card--active');
		}

		for (const dot of buttonDots) {
			dot.classList.remove('slideshow__button-dot--active');
		}

		slideshowSlides[currentSlideIndex].classList.add('slideshow__card--active');
		
		buttonDots[currentSlideIndex].classList.add('slideshow__button-dot--active');
	}
}