export default function Sortinghat() {
	const sortinghat = document.querySelector('.sortinghat__random-picker');
	const outputField = document.querySelector('.sortinghat__result');
	const clickButton = document.querySelector('.sortinghat__click-button');
	const houseResults = document.querySelectorAll('.sortinghat__results-text');
	const houseArray = [
		'Gryffindor',
		'Hufflepuff',
		'Ravenclaw',
		'Slytherin'
	];

	let selectedHouse = null;

	if (sortinghat) {
		clickButton.addEventListener('click', handleClickButton);
	}

	function handleClickButton(event) {
		getHouseResult();
		renderHTML();
	}
 
	function getHouseResult() {
		const randomIndex = Math.floor(Math.random() * houseArray.length);
		const randomlyChosenHouse = houseArray[randomIndex];

		//????????
		if (randomlyChosenHouse === selectedHouse) {
			getHouseResult();
		}

		selectedHouse = randomlyChosenHouse;
	}

	function renderHTML() {
		for (const result of houseResults) {
			result.classList.remove('sortinghat__results-text--visible');

			if (result.dataset.house === selectedHouse) {
				result.classList.add('sortinghat__results-text--visible');
			}
		}

		outputField.innerText = selectedHouse;
	}

}