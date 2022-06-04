export function greet() {
	let morningAfternoonNight = new Date()
	let greet = document.querySelector('.greetings')
	let inputName = document.querySelector('[data-input-name]')
	let name = document.querySelector('.input-name-container')

	inputName.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			let username = inputName.value
			name.style.display = 'none'
			if (
				morningAfternoonNight.getHours() >= 1 &&
				morningAfternoonNight.getHours() <= 12
			) {
				greet.textContent = 'Goodmorning, ' + username + '!'
			} else if (
				morningAfternoonNight.getHours() > 12 &&
				morningAfternoonNight.getHours() <= 18
			) {
				greet.textContent = 'Goodafternoon, ' + username + '!'
			} else {
				greet.textContent = 'Goodevening, ' + username + '!'
			}
		}
	})
}
