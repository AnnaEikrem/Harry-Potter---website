export default function Header() {
	let navigationVisible = false;

	const headerMenuButton = document.querySelector('.header__menu-button');
	const headerNavigation = document.querySelector('.header__navigation');


	// Event listener
	headerMenuButton.addEventListener('click', handleHeaderMenuButtonClick);

	/* Event handler: Toggles visibility class on 'click' event */
	function handleHeaderMenuButtonClick(event) {
		toggleNavigationVisibility();
		renderHTML();
	}

	function toggleNavigationVisibility() {
		navigationVisible = !navigationVisible;
	}

	function renderHTML() {
		if (navigationVisible === true) {
			headerNavigation.classList.add('header__navigation--visible');
		} else {
			headerNavigation.classList.remove('header__navigation--visible');
		}
	}
}