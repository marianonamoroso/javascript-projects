'use strict';

/* 
ID1 = document.querySelector('#<id>') 
ID2 = document.getElementById('<id>')

Class = document.querySelector('.<class-name>')
*/

// Selecting elements
const score0El = document.querySelector('#score--0') 
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice') 

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

