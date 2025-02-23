const input = require('sync-input')

class Chatbot {
    constructor() {
        this.bot_name = "Aid"
        this.birth_year = 2025
        this.username = ""
    }
    displayOutput() {
        console.log(`Hello, My name is ${this.bot_name}.`)
        console.log(`I was created in ${this.birth_year}.`)
    }
    askUserName() {
        this.username = input("Please, remind me your name. ")
        console.log(`What a great name you have, ${this.username}!`)
    }
    askAge() {
        console.log(`Let me guess your age.`)
        console.log(`Enter `)
    }
}

function main() {
    let chat = new Chatbot()
    chat.displayOutput();
    chat.askUserName()
}

main();