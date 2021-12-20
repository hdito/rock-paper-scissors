function computerPlay() {
    const computerTurn = Math.floor(Math.random() * 3);
    switch (computerTurn) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function showResult(result) {
    let round = document.querySelector('#round');
    let playerWins = document.querySelector('#playerWins');
    let computerWins = document.querySelector('#computerWins');
    if (result === 0) {
        round.textContent++;
    } else if (result === 1) {
        playerWins.textContent++;
        round.textContent++;
    } else {
        computerWins.textContent++;
        round.textContent++;
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("everything's ok!")
    console.log(playerSelection, computerSelection)
    if (playerSelection === computerSelection) {
        showResult(0);
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            showResult(2);
        } else if (computerSelection === "scissors") {
            showResult(1);
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            showResult(1);
        } else if (computerSelection === "scissors") {
            showResult(2);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            showResult(2);
        }
        else if (computerSelection === "paper") {
            showResult(1);
        }
    } else {
        showResult(2);
    }
}

function checkEnd() {
    const round = document.querySelector('#round').textContent;
    const buttons = document.querySelectorAll('button');

    if (round >= 5) {
        buttons.forEach(button => button.setAttribute("disabled", "disabled"));
        const result = document.querySelector('#result');
        const computerWins = document.querySelector('#computerWins').textContent;
        const playerWins = document.querySelector('#playerWins').textContent;
        if (computerWins < playerWins) {
            result.textContent = 'You win!';
        } else if (computerWins > playerWins) {
            result.textContent = 'You lose!';
        } else result.textContent = 'Tie!'
    }
}

const buttons = document.querySelectorAll('button');
const results = document.querySelectorAll('div > div');

buttons.forEach(button => button.addEventListener('click', function () { playRound(button.textContent.toLowerCase(), computerPlay()) }))
buttons.forEach(button => button.addEventListener('click', checkEnd))