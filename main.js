window.onload = init;

function init() {
    document.querySelector('#input')
        .addEventListener('keyup', handleTyping);

        document.querySelector('#input2')
        .addEventListener('keyup', wingDinger);

        document.querySelector('#input3')
        .addEventListener('keyup', reverser);
}

// function handleTyping(event) {
//     let userInput = event.target.value.toString();
//     let myString = userInput.toLowerCase().split(' ');

//     for(let i = 0; i < myString.length; i++){
//         myString[i] = myString[i][0].toUpperCase() + myString[i].slice(1);
//     }

//     document.querySelector('#output').innerText = myString.join(' ')
// }

function handleTyping(event) {
    let userInput = event.target.value.toString();
    let myString = userInput.toLowerCase();
    let result = '';
    let i = 0;
    while(i < myString.length){
        if(i === 0 || myString[i-1] === ' '){
        result += myString[i].toUpperCase();
        } else {
        result += myString[i];
        }
        i++
    }
    document.querySelector('#output').innerText = result;
}

function wingDinger(event){
    let coolInput = event.target.value.toString();
    let answer = coolInput;

    document.querySelector('#output2').innerText = answer;
}

function reverser(event){
    let userInput = event.target.value.toString();
    let result = '';
    let i = userInput.length - 1;

    while(i >= 0){
        result += userInput[i];
        i--;
    }

    document.querySelector('#output3').innerText = result;
}