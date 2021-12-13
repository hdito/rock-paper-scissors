function computerPlay(params) {
    const computerTurn = Math.floor(Math.random() * 3);
    console.log(computerTurn)
    switch (computerTurn) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}
computerPlay();