function computerPlay(params) {
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

function getPlayerTurn(params) {
    const playerTurn = prompt("Your turn:", "") ?? "";
    const standardizedTurnOutput = playerTurn.toLowerCase();
    return standardizedTurnOutput;
}

function evaluateTurn(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1)} can't beat another ${playerSelection}.`
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper"
    } else return "You lose! Show something!"

}

function game(rule, player, computer) {
    let winnerCount = 0;
    let loserCount = 0;
    for (let index = 0; index < 5; index++) {
        let result = rule(player(), computer());
        if (/You win/i.test(result)) {
            winnerCount++;
        } else if (/You lose/i.test(result)) {
            loserCount++;
        }
        console.log(result);
    }
    if (winnerCount > loserCount) {
        return `You win with ${winnerCount} victories`;
    } else if (winnerCount < loserCount) {
        return `Computer win with ${loserCount} victories`
    } else return `Tie! You and computer have ${winnerCount} victories`
}

console.log(game(evaluateTurn, getPlayerTurn, computerPlay));