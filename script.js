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
        return 1
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return 0
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return 0
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return 0
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 1
    } else return 0

}

function game(rule, player, computer) {
    let winnerCount = 0;
    let loserCount = 0;
    for (let index = 0; index < 5; index++) {
        const result = rule(player(), computer());
        console.log(result);

        if (result === 1) {
            winnerCount++;
        } else if (result === 0) {
            loserCount++;
        }
    }
    if (winnerCount > loserCount) {
        return `You win with ${winnerCount} victories`;
    } else if (winnerCount < loserCount) {
        return `Computer win with ${loserCount} victories`
    } else return `Tie! You and computer have ${winnerCount} victories`
}

console.log(game(evaluateTurn, getPlayerTurn, computerPlay));