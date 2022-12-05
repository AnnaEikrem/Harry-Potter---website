export default function Sortinghat() {
	const audio = new Audio;
	audio.src = '/assets/audio/harryPotter-theme.mp3'

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

	// Event listener
	if (sortinghat) {
		clickButton.addEventListener('click', handleClickButton);
	}


	// Event handler
	function handleClickButton(event) {
		getHouseResult();
		playAudio();
		renderHTML();
	}
 
	function getHouseResult() {
		const randomIndex = Math.floor(Math.random() * houseArray.length);
		const randomlyChosenHouse = houseArray[randomIndex];

		/* Suppose to prevent the same 'house' from being selected twice in a row */
		if (randomlyChosenHouse === selectedHouse) {
			getHouseResult();
		}

		selectedHouse = randomlyChosenHouse;
	}

	// Adds audio
	function playAudio() {
		audio.play();
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