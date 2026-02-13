const prompt = require('prompt-sync')();

const name = prompt("Whats your name? ")

console.log("The user input name", name)


const selection = prompt("What do you want to do? ")

if (selection == 1) {
    console.log("lets create a user")
}
