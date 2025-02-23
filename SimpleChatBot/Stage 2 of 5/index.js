const input = require('sync-input')

class Chatbot {
    constructor() {
        this.bot_name = input("Type the bot name: ")
        this.birth_year = 2025
    }
    displayOutput() {
        console.log(`Hello, My name is ${this.bot_name}.`)
        console.log(`I was created in ${this.birth_year}.`)
    }
}

function main() {
    let chat = new Chatbot()
    chat.displayOutput();
}

main();