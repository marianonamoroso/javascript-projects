'use strict';

// Variables
const btnShowModal = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal') 
const btnCloseModal = document.querySelector('.close-modal') 
const overlay = document.querySelector('.overlay')

// Functions
const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const showModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

// Show Modal
for (let index = 0; index < btnShowModal.length; index++) {
    btnShowModal[index].addEventListener('click', showModal)
}

// Close Modal
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// Document Events
document.addEventListener('keydown', function(e){
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) closeModal()
})