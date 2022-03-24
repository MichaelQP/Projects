const choices = ['rock', 'paper', 'scissors'];

function game() {
   playRound();
}
function playRound() {
    const playSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt('Type rock, paper, or scissors');
    while(input == null){
        input = prompt('Type rock, paper, or scissors');
    input = input.toLowerCase();
    let check = validateInput(input)
    if (check == true) {
        console.log(input)
    }
    
    }
    console.log(input);
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice){
    if(choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

game();
