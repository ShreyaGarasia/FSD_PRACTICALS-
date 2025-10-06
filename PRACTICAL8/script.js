let count = parseInt(localStorage.getItem('repCount')) || 0;
const repDisplay = document.getElementById('repCount');

function updateDisplay() {
repDisplay.textContent = count;
localStorage.setItem('repCount', count);
}

function changeCount(value) {
count += value;
if (count < 0) count = 0;
updateDisplay();
}

function resetCount() {
count = 0;
updateDisplay();
}

updateDisplay();
