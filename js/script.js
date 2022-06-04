import { refreshTime } from './clock.js'
import { backgroundImgRefresh } from './background.js'
import { greet } from './greet.js'
import { inputFocus, focus, mainFocus } from './focus.js'
import {
	repeatRandomQuote,
	addQuote,
	inputOpenQuote,
	inputAddQuote,
	quotes,
	giveQuote,
} from './quotes.js'

import { cancelButton, toDoBackground, toDoIcon, toDoInput } from './todo.js'

window.addEventListener('load', () => {
	//clock --------------------------------

	refreshTime()
	setInterval(refreshTime, 1000)

	//background --------------------------------

	backgroundImgRefresh()
	setInterval(backgroundImgRefresh, 1000)

	//greetings --------------------------------

	greet()
	setInterval(greet, 1000)

	// focus --------------------------------

	inputFocus.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			let focusTopic = inputFocus.value
			focus.style.display = 'none'
			mainFocus.textContent = focusTopic
		}
	})

	//quote -------------------------------

	giveQuote()

	repeatRandomQuote.addEventListener('click', giveQuote)
	addQuote.addEventListener('click', () => {
		inputOpenQuote.classList.toggle('hidden')
	})
	inputAddQuote.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			let quoteAdd = inputAddQuote.value
			quotes.push(quoteAdd)
			localStorage.setItem('quotes', quoteAdd)
			inputOpenQuote.classList.toggle('hidden')
			console.log(quotes)
			inputAddQuote.value = ''
		}
	})
	quotes.push(localStorage.getItem('quotes'))

	//todo ----------------------------------------------------------------

	cancelButton.addEventListener('click', () => {
		toDoBackground.classList.add('hidden')
	})
	toDoIcon.addEventListener('click', () => {
		toDoBackground.classList.toggle('hidden')
	})

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
