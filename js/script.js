const rollBtn = document.getElementById('rollBtn');
const addBtn = document.getElementById('addBtn');
const resultsDiv = document.getElementById('results');
const diceContainer = document.getElementById('diceContainer');

let rolls = [];

rollBtn.addEventListener('click', rollDice);
addBtn.addEventListener('click', addDice);

function rollDice() {
    for (let i = 0; i < rolls.length; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        rolls[i] = roll;
        updateDice(i, roll);
    }
    displayResults();
}

function addDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    rolls.push(roll);
    displayResults();
    createDiceElement(roll);
}

function displayResults() {
    resultsDiv.innerHTML = '';
    const counts = {};
    rolls.forEach(roll => counts[roll] = (counts[roll] || 0) + 1);
    
    for (let i = 1; i <= 6; i++) {
        const percentage = (counts[i] || 0) / rolls.length * 100 || 0;
        resultsDiv.innerHTML += `<p>Número ${i}: ${percentage.toFixed(2)}%</p>`;
    }
}

function createDiceElement(roll) {
    const diceDiv = document.createElement('div');
    diceDiv.classList.add('dice');
    diceDiv.textContent = roll;
    diceContainer.appendChild(diceDiv);
}

function updateDice(index, roll) {
    const diceElements = diceContainer.querySelectorAll('.dice');
    diceElements[index].textContent = roll;
}
