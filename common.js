function selectPlayer(e) {
    const player = e.parentElement.previousElementSibling.innerText;
    const ol = document.querySelector('ol');
    const li = document.createElement('li');
    const players = ol.children.length;

    if(players < 5) {
        li.innerText = player;
        ol.appendChild(li);
        e.setAttribute('disabled', 'true');
    } else {
        alert('You can select only 5 players');
    }
}

function getValueFromInputField(inputId) {
    const stringValue = document.getElementById(inputId).value;
    const numberValue = parseInt(stringValue);
    return numberValue;
}
