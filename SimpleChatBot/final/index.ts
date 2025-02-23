import input from "sync-input"

class Chatbot {
    private readonly bot_name: string;
    private readonly birth_year : number
    private username: string
    private age: number

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
        this.age = ((remainder3 * 70) + (remainder5 * 21) + (remainder7 * 15)) % 105
        console.log(`Your age is ${this.age}; that's a good time to start programming!`)
    }

    count() {
        let count = Number(input(`Now I will prove to you that I can count to any number you want.`))
        for (let i = 0; i <= count; i++) {
            console.log(`${i}!`)
        }

    }

    test() {
        console.log(`Let's test your programming knowledge.`)
        console.log(`Why do we use methods.`)
        console.log(`1. To repeat a statement multiple times.`)
        console.log(`2. To decompose a program into several small subroutines.`)
        console.log(`3. To determine the execution time of a program.`)
        console.log(`4. TO interrupt the execution of a program.`)
        let answer = input("");
        while (answer != "2") {
            console.log(`Please. try again.`)
            answer = input("")
        }
        console.log(`Congratulations, have a nice day!`)
    }
}

function main() {
    let chat = new Chatbot()
    chat.displayOutput();
    chat.askUserName();
    chat.askAge();
    chat.count();
    chat.test();
}

main();