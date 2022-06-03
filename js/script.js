window.addEventListener('load', () => {
	let refreshTime = () => {
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
	setInterval(refreshTime, 1000)

	//background

	function backgroundImgRefresh() {
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

	setInterval(backgroundImgRefresh, 1000)

	//greetings

	function greet() {
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
	setInterval(greet, 1000)

	// focus
	let inputFocus = document.querySelector('[data-input-focus]')
	let focus = document.querySelector('.input-focus-container')
	let mainFocus = document.querySelector('.main-focus')
	inputFocus.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			let focusTopic = inputFocus.value
			focus.style.display = 'none'
			mainFocus.textContent = focusTopic
		}
	})

	//quote
	const quotes = [
		'“The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.” — Roy Mustang (Full Metal Alchemist)',
		'“To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.” — Matsumoto Rangiku (Bleach)',
		'“Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.” — Gildarts Clive (Fairy Tail)',
		'“Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.” — Kenshin Himura (Rurouni Kenshin: Meiji Kenkaku Romantan)',
		'“People, who can’t throw something important away, can never hope to change anything.” — Armin Arlert (Shingeki no Kyojin / Attack on Titan)',
		'“A person can change, at the moment when the person wishes to change.” — Haruhi Fujioka (Ouran Highschool Host Club)',
		'“What good are dreams, if all you do is work? There’s more to life than hitting the books, I hope you know.” — Tamaki Suou (Ouran Highschool Host Club)',
		'“If you don’t take risks, you can’t create a future!” — Monkey D. Luffy (One Piece)',
		'“When you give up, that’s when the game ends.” — Mitsuyoshi Anzai (Slam Dunk)',
		'“What good are dreams, if all you do is work? There’s more to life than hitting the books, I hope you know.” — Tamaki Suou (Ouran Highschool Host Club)',
		'“You will never be able to love anybody else until you love yourself.” — Lelouch Lamperouge (Code Geass)',
		'“No matter which love line, what time, or where I am, I will always love you. I’ll say it one more time. I love you.” — Okabe (Steins; Gate)',
		'“Even if I lose this feeling, I’m sure I’ll just fall in love with you all over again.” — Syaoran Li (Cardcaptor Sakura)',
		'“It was like you brought color to my life. You changed my life, all by yourself.” — Sawaka Kuronuma (Reaching You)',
		'“Forgetting is like a wound. The wound may heal but it has already left a scar.” — Monkey D Luffy (One Piece)',
		'“If it’s possible for one person to be hurt by another, then it’s possible for that person to be healed by another.” — Sohma Hatori (Fruits Basket)',
		'“If I can meet you again, against the 6 billion to 1 odds, even If you can’t move, I’ll marry you.” — Hideki Hinata (Angel Beats)',
		'“The scars that you can’t see are the hardest to heal.” — Nao Tamori (Charlotte)',
		'“I’ll make you so in love with me, that every time our lips touch, you’ll die a little death.” — Ai Yazawa (Nana)',
		'“Even if I searched the world over, no one could compare to you.” — Hikaru Hitachiin (Ouran Highschool Host Club)',
		'“The thing I wished for destroyed my whole family. I brought all this suffering down on my family because I made a wish for my dad without knowing what he really wanted.” — Kyoko Sakura',
		'“I’m fine, except… it’s a terrible day for rain.” — Roy Mustang',
		'“I really want to be with all of you! I want to play! That’s why I’m going to reincarnate! Then I’ll be with everyone again.” — Menma',
		'“Aren’t I supposed to have taught you something important in life by now? What have I taught you?” — Hana',
		'“Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?” — Juuzou Suzuya',
		'“Did I make the Japanese people happy? Did I make it work?” — Euphemia Li Britannia',
	]

	function giveQuote() {
		let quoteDisplay = document.querySelector('.quote')
		let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
		quoteDisplay.textContent = randomQuote
	}
	giveQuote()

	let repeatRandomQuote = document.querySelector('.random-quote')
	repeatRandomQuote.addEventListener('click', giveQuote)

	let addQuote = document.querySelector('.add-quote')
	let inputOpenQuote = document.querySelector('.hidden')
	addQuote.addEventListener('click', () => {
		inputOpenQuote.classList.toggle('hidden')
	})

	let inputAddQuote = document.querySelector('[data-input-quote]')
	inputAddQuote.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			let quoteAdd = inputAddQuote.value
			localStorage.setItem('newQuote', quoteAdd)
			let newQuote = localStorage.getItem('newQuote')
			// quotes.push(quoteAdd)
			quotes.push(newQuote)
			inputOpenQuote.classList.toggle('hidden')
			console.log(quotes)
			inputAddQuote.value = ''
		}
	})
	quotes.push(localStorage.getItem('newQuote'))
	//todo

	const cancelButton = document.querySelector('.cancel-button')
	const toDoBackground = document.querySelector('.todo-background')
	const toDoIcon = document.querySelector('.todo')

	cancelButton.addEventListener('click', () => {
		toDoBackground.classList.add('hidden')
	})
	toDoIcon.addEventListener('click', () => {
		toDoBackground.classList.toggle('hidden')
	})

	const toDoInput = document.querySelector('[data-input-todoList]')
	toDoInput.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			const toDoInputValue = toDoInput.value

			const toDoListContainer = document.querySelector('.todo-list-container')
			const toDoContent = document.createElement('div')
			toDoContent.classList.add('content')

			toDoListContainer.appendChild(toDoContent)
			const checkBox = document.createElement('i')

			checkBox.classList.add('fa-solid', 'fa-square', 'check-box-container')

			toDoContent.appendChild(checkBox)

			const todoList = document.createElement('input')
			todoList.classList.add('text')
			todoList.type = 'text'
			todoList.value = toDoInputValue
			todoList.setAttribute('readonly', 'readonly')

			toDoContent.appendChild(todoList)

			const deleteToDo = document.createElement('i')
			deleteToDo.classList.add('fa-solid', 'fa-ban', 'delete-container')

			toDoContent.appendChild(deleteToDo)

			toDoInput.value = ''

			deleteToDo.addEventListener('click', () => {
				todoList.remove()
				deleteToDo.remove()
				checkBox.remove()
			})

			checkBox.addEventListener('click', () => {
				checkBox.classList.toggle('done-check-box')
				todoList.classList.toggle('checked')
			})
		}
	})

	// end
})
