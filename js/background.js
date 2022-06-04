export function backgroundImgRefresh() {
	let timeOfDay = new Date()
	let body = document.querySelector('body')

	if (timeOfDay.getHours() > 6 && timeOfDay.getHours() <= 12) {
		body.style.backgroundImage = 'url(./img/day.jpg)'
	} else if (timeOfDay.getHours() > 12 && timeOfDay.getHours() <= 18) {
		body.style.backgroundImage = 'url(./img/afternoon.jpg)'
	} else {
		body.style.backgroundImage = 'url(./img/night.jpg)'
	}
}
