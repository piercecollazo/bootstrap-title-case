window.onload = init;

function init() {
    document.querySelector('#input')
        .addEventListener('keyup', handleTyping);

        document.querySelector('#input2')
        .addEventListener('keyup', wingDinger);
}

function handleTyping(event) {
    let userInput = event.target.value.toString();
    // let answer = userInput;
    let myString = userInput.toLowerCase().split(' ');

    for(let i = 0; i < myString.length; i++){
        myString[i] = myString[i].charAt(0).toUpperCase() + myString[i].slice(1);
    }

    document.querySelector('#output').innerText = myString.join(' ')
}

function wingDinger(event){
    let coolInput = event.target.value.toString();
    let answer = coolInput

    document.querySelector('#output2').innerText = answer;
}