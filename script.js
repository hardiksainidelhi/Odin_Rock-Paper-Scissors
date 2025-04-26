


function playGame() {
    // Initialize user and machine score
    let userScore = 0;
    let machineScore = 0;

    const playerChoiceBtns = document.querySelectorAll('button')
    const resultDiv = document.querySelector('#result')

    playerChoiceBtns.forEach((button) => {
        button.addEventListener('click', (event) => {
            const playerChoice = event.target.textContent.toUpperCase()
            const machineChoice = generateComputerChoice()
            
            if (userScore < 5){
                const message = playRound(playerChoice, machineChoice)

                resultDiv.innerText = `your choice: ${playerChoice} and machine choice: ${machineChoice} \n
                                        ${message} \n
                                        score( you:${userScore} vs machine: ${machineScore} )`

            }
            else {
                resultDiv.innerText = (userScore>machineScore) ?
                 'You win' : (userScore = machineChoice) ? 
                 'Tie': 'You lose'
            }
        })
    })

    // Game Round
    function playRound(userChoice, machineChoice) {
        let message;
        switch (userChoice) {
            case 'ROCK':
                if (machineChoice === 'PAPER') {
                    machineScore++
                    message = 'You lose this round ❌'
                }
                else if (machineChoice == 'SCISSOR') {
                    userScore++;
                    message = 'You win this round ✅ '
                }
                else {
                    message = 'Tie'
                }

                break;
            case 'PAPER':
                if (machineChoice === 'SCISSOR') {
                    machineScore++
                    message = 'You lose this round ❌'
                }
                else if (machineChoice == 'ROCK') {
                    userScore++;
                    message = 'You win this round ✅ '
                }
                else {
                    message = 'Tie'
                }
                break;
            case 'SCISSOR':
                if (machineChoice === 'ROCK') {
                    machineScore++
                    message = 'You lose this round ❌'
                }
                else if (machineChoice == 'PAPER') {
                    userScore++;
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
function generateComputerChoice() {
    let c = Math.floor(Math.random() * 3) + 1
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

