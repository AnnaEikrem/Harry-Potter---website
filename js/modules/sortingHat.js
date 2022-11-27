export default function Sortinghat() {
	const sortinghat = document.querySelector('.sortinghat__random-picker');
	const outputField = document.querySelector('.sortinghat__result');
	const clickButton = document.querySelector('.sortinghat__click-button');
	const houseArray = [
		'Gryffindor',
		'Hufflepuff',
		'Ravenclaw',
		'Slytherin'
	];
	let outputMessage;

	if (sortinghat) {
		clickButton.addEventListener('click', handleClickButton);
	}

	function handleClickButton(event) {
		getHouseResult();
		renderHTML();
	}
 
	function getHouseResult() {
		const randomIndex = Math.floor(Math.random() * houseArray.length);
		outputMessage = houseArray[randomIndex];
		console.log(outputMessage);

		return outputMessage;
	}

	function renderHTML() {
		outputField.innerHTML = ` ${outputMessage}`;
	}

}