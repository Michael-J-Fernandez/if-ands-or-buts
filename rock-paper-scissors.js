const prompt = require('prompt-sync')({sigint: true});

let player1 = prompt("Player 1: Choose rock, paper, or scissors: ")
let player2 = prompt("Player 2: Choose rock, paper, or scissors: ")

if ((player1 === "rock" || player1 === "paper" || player1 === "scissors") && (player2 === "rock" || player2 === "paper" || player2 === "scissors")) {
    if (player1 === player2) {
        console.log("Draw!");
    } else if (player1 === "rock" && player2 === "scissors") {
        console.log("Player 1 wins!");
    } else if (player1 === "rock" && player2 === "paper") {
        console.log("Player 2 wins!");
    } else if (player1 === "paper" && player2 === "rock") {
        console.log("Player 1 wins!");
    } else if (player1 === "paper" && player2 === "scissors") {
        console.log("Player 2 wins!")
    } else if (player1 === "scissors" && player2 === "paper") {
        console.log("Player 1 wins!")
    } else if (player1 === "scissors" && player2 === "rock") {
        console.log("Player 2 wins!")
    } 
} else {
        console.log("Error: Invalid Entry")
}