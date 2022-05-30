// clock
let refreshTime = () => {
	let today = new Date()
	let amOrPm = today.getHours() >= 12 ? 'PM' : 'AM'

	let time =
		(today.getHours() % 12) +
		' : ' +
		today.getMinutes() +
		' : ' +
		today.getSeconds() +
		' ' +
		amOrPm
	document.querySelector('.time').textContent = time
}
setInterval(refreshTime, 1000)

//background

function backgroundImgRefresh() {
	let timeOFDay = new Date()
	if (timeOFDay.getHours() > 6 && timeOFDay.getHours() <= 12) {
		document.querySelector('body').style.backgroundImage =
			'url(../img/day.jpg);'
	} else if (timeOFDay.getHours() > 12 && timeOFDay.getHours() <= 18) {
		document.querySelector('body').style.backgroundImage =
			'url(../img/afternoon.jpg);'
	} else if (timeOFDay.getHours() > 18 && timeOFDay.getHours() <= 6) {
		document.querySelector('body').style.backgroundImage =
			'url(../img/night.jpg);'
	}
}
setInterval(backgroundImgRefresh, 1000)
