/*Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click fetch altre 10 mail (sostituendo le altre)*/

const ulEl = document.querySelector('ul')
for (let i = 0; i < 10; i++) {
	axios
		.get('https://flynn.boolean.careers/exercises/api/random/mail')

		.then((response) => {
			const liEl = document.createElement('li')
			liEl.textContent = response.data.response
			ulEl.appendChild(liEl)
		})
}
