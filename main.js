window.onload = init;

function init() {
    document.querySelector('#titleIn')
        .addEventListener('keyup', handleTyping);

        document.querySelector('#wingIn')
        .addEventListener('keyup', wingDinger);

        document.querySelector('#reverseIn')
        .addEventListener('keyup', reverser);

        document.querySelector('#emojiIn')
        .addEventListener('keyup', randomEmoji)
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
        if(i === 0 || myString[i - 1] === ' '){
            result += myString[i].toUpperCase();
        } else {
            result += myString[i];
        }
        i++
    }
    document.querySelector('#titleOut').innerText = result;
}

function wingDinger(event){
    let coolInput = event.target.value.toString();
    let answer = coolInput;

    document.querySelector('#wingOut').innerText = answer;
}

function reverser(event){
    let userInput = event.target.value.toString();
    let result = '';
    let i = userInput.length - 1;

    while(i >= 0){
        result += userInput[i];
        i--;
    }

    document.querySelector('#reverseOut').innerText = result;
}

function randomEmoji(event){
    let userInput = event.target.value.toString();
    let i = userInput.length - 1;
    let answer = '';
    let emoji = [':) ', 'B)', ':P ', ':/ ', ':( ', ':3 '];

    while(i > 0){
        if(userInput[i] === ' ' || userInput[i] === userInput[0]){
            let random = Math.floor(Math.random() * 5);
            answer += emoji[random];
        }
        i--;
    }
    document.querySelector('#emojiOut').innerText = answer;
}