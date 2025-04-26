


function playGame(){
    // Initialize user and machine score
    let userScore = 0;
    let machineScore = 0;

    const rounds = 5;
    for (let i = 0;i<rounds;i++){
        let userChoice = getHumanChoice()
        let machineChoice = generateComputerChoice()
        message = playRound(userChoice,machineChoice)
        alert(
            `Round ${i+1}!\n
            your choice: ${userChoice}\n
            machine choice: ${machineChoice}\n
            result: ${message}\n
            score: you:${userScore} vs machine: ${machineScore}`
        )
    }

    (machineScore > userScore) ? alert('You Lose!') : alert('You Win!');
    
    // Game Round
    function playRound(userChoice,machineChoice){
        let message;
        switch (userChoice){
            case 'ROCK':
                if (machineChoice === 'PAPER'){
                    machineScore ++
                    message = 'You lose this round ❌'
                }
                else if (machineChoice == 'SCISSORS'){
                    userScore ++;
                    message = 'You win this round ✅ '
                }
                else {
                    message = 'Tie'
                }
                
                break;
            case 'PAPER':
                if (machineChoice === 'SCISSOR'){
                    machineScore ++
                    message = 'You lose this round'
                }
                else if (machineChoice == 'ROCK'){
                    userScore ++;
                    message = 'You win this round ✅ '
                }
                else {
                    message = 'Tie'
                }
                break;
            case 'SCISSOR':
                if (machineChoice === 'ROCK'){
                    machineScore ++
                    message = 'You lose this round ❌'
                }
                else if (machineChoice == 'PAPER'){
                    userScore ++;
                    message = 'You win this round ✅ '
                }
                else {
                    message = 'Tie'
                }
                break;
        }
        return message
    }

    
}

playGame()

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
