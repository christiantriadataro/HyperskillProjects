const input = require('sync-input')

class Chatbot {
    constructor() {
        this.bot_name = "Aid"
        this.birth_year = 2025
        this.username = ""
        this.age = 0
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
        console.log(`Enter remainders of dividing your age by 3, 5, 7.`)
        let remainder3 = Number(input("Dividing your age by 3: "))
        let remainder5 = Number(input("Dividing your age by 5: "))
        let remainder7 = Number(input("Dividing your age by 7: "))
        this.age = ((remainder3 * 70) + (remainder5 * 21)  + (remainder7 * 15)) % 105
        console.log(`Your age is ${this.age}; that's a good time to start programming!`)
    }
}

function main() {
    let chat = new Chatbot()
    chat.displayOutput();
    chat.askUserName();
    chat.askAge();
}

main();