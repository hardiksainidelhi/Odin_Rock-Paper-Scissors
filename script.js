// Initialize user and machine score

let userScore = 0;
let machineScore = 0;

// Game Round


// Get Human choice from prompt
function getHumanChoice() {
    let choice;
    choice = prompt("Enter Choice: ")
    return choice.toUpperCase()

    }
    
// Generate machine choice
function generateComputerChoice(){
    let c = Math.floor(Math.random()*3) + 1
    let choice;

    switch (c) {
        case 1:
            choice = 'ROCK'
            break;
        case 2:
            choice = 'PAPER';
            break;
        case 3:
            choice = 'SCISSOR'
            break;
    }

    return choice;
}
