document.getElementById('calculate-btn').addEventListener('click', function() {
    const perPlayerCost = getValueFromInputField('per-player-input');
    const ol = document.querySelector('ol');
    const players = ol.children.length;
    const playerExpenses = perPlayerCost * players;
    document.getElementById('player-expenses').innerText = playerExpenses;
});

document.getElementById('total-btn').addEventListener('click', function() {
    const playerExpenses = parseInt(document.getElementById('player-expenses').innerText);
    const managerInput = getValueFromInputField('manager-input');
    const coachInput = getValueFromInputField('coach-input');
    const totalCost = playerExpenses + managerInput + coachInput;
    document.getElementById('total-cost').innerText = totalCost;
});