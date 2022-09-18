const prompt = require('prompt-sync')({sigint: true});

let player1 = prompt("Player 1: Choose rock, paper, or scissors: ")
let player2 = prompt("Player 2: Choose rock, paper, or scissors: ")

if (player1 === player2) {
    console.log("Draw!");
} else if (player1 === "rock") {
    if (player2 === "paper") {
        console.log("Player 2 wins!");
    } else if (player2 === "scissors") {
        console.log("Player 1 wins!")
    }   
} else if (player1 === "paper") {
    if (player2 === "scissors") {
        console.log("Player 2 wins!");
    } else if (player2 === "rock") {
        console.log("Player 1 wins!")
    }
} else if (player1 === "scissors") {
    if (player2 === "rock") {
        console.log("Player 2 wins!")
    } else if (player2 === "paper") {
        console.log("Player 1 wins!")
    }
}

/*
"rock" = (> "scissors")
"paper" = (> "rock")
"scissors" = (> "paper")

if (player1 === player2) {
    console.log("Draw!")
} else if (player1 > player2) {
    console.log("Player 1 wins!")
} else if (player1 < player2) {
    console.log("Player 2 wins!");
}
*/