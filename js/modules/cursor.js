export default function Cursor() {
	/* Code from github: 'Rorothejedi1
		https://github.com/Rorothejedi/poc_marauders_footsteps_cursor
	*/
	const distanceBetweenSteps = 50 // in px
	const timeBeforeRemoveStep = 700 // in milliseconds
	const minimumTimeBetweenSteps = 30 // in milliseconds

	let x;	
	let y;
	let stepSide;
	let wait = false;

	onmousemove = (event) => {
		if (wait) return

		if (x === undefined && y === undefined) {
			x = event.x
			y = event.y
		}

		const distance = calculateDistance(x, y, event.x, event.y)

		if (distance < distanceBetweenSteps) return

		putStep(x, y, event.x, event.y)

		x = event.x
		y = event.y

		waitBetweenSteps()
	}

	function calculateDistance(xA, yA, xB, yB) {
		return Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2))
	}

	function putStep(xA, yA, xB, yB) {
		const angle = calculateAngle(xA, yA, xB, yB)
		const step = createStepOnDOM()

		removeStepAfterTimer(step)

		step.classList.add('present')
		step.classList.add('steps')

		step.style.left = `${xA}px`
		step.style.top = `${yA}px`
		step.style.transform = `rotate(${angle}deg)`
	}

	function calculateAngle(xA, yA, xB, yB) {
		return Math.atan2(yB - yA, xB - xA) * 180 / Math.PI + 90;
	}

	function createStepOnDOM() {
		const step = document.createElement('img')

		step.src = (stepSide === 'left') ? './assets/left_footstep.png' : './assets/right_footstep.png';
		stepSide = (stepSide === 'left') ? 'right' : 'left'

		document.body.append(step)

		return step
	}

	function removeStepAfterTimer(step) {
		setTimeout(() => {
			step.classList.remove('present')
			step.addEventListener("transitionend", () => {
					step.remove();
			})
		}, timeBeforeRemoveStep)
	}

	function waitBetweenSteps() {
		wait = true

		setTimeout(() => {
			wait = false
		}, minimumTimeBetweenSteps);
	};
}