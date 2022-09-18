const prompt = require('prompt-sync')({sigint: true});


let pinCode = 1234;
let userInput = Number(prompt("Enter pin code: "))

if (userInput === pinCode) {
    console.log("success");
} else {
    console.log("failure");
}