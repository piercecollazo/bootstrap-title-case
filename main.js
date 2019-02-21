window.onload = init;

function init() {
    document.querySelector('#input')
        .addEventListener('keyup', handleTyping);
}

function handleTyping(event) {
    let userInput = event.target.value.toString();
    // let answer = userInput;
    let myString = userInput.toLowerCase().split(' ');

    for(let i = 0; i < myString.length; i++){
        myString[i] = myString[i].charAt(0).toUpperCase() + myString[i].slice(1);
    }

    document.querySelector('#changeme').innerText = myString.join(' ')
}