export const refreshTime = () => {
	let today = new Date()
	let amOrPm = today.getHours() >= 12 ? 'PM' : 'AM'
	let addZeroSeconds = today.getSeconds() <= 9 ? '0' : ''
	let addZeroHours = today.getHours() % 12 <= 9 ? '0' : ''
	let addZeroMinutes = today.getMinutes() <= 9 ? '0' : ''

	let time =
		addZeroHours +
		(today.getHours() % 12) +
		': ' +
		addZeroMinutes +
		today.getMinutes() +
		': ' +
		addZeroSeconds +
		today.getSeconds() +
		' ' +
		amOrPm
	document.querySelector('.time').textContent = time
}
