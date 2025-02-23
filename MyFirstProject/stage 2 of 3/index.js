const input = require('sync-input')

function toCapitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function repUnderscoreSpace(word) {
    return word.split('_').join(' ')
}

function modifyString(word) {
    return toCapitalize(repUnderscoreSpace(word))
}

function sum(object) {
    let sum = 0;
    for (const key in object) {
        sum += Number(object[key])
    }
    return sum;
}

class Cafe {
    constructor() {
        this.menu = {
            bubblegum: 2,           // input("Bubblegum Price: "),
            toffee: 0.2,            // input("Toffee Price: "),
            ice_cream: 5,           // input("Ice Cream Price: "),
            milk_chocolate: 4,      // input("Milk Chocolate Price: "),
            doughnut: 2.5,          // input("Doughnut Price: "),
            pancake:  3.2           // input("Pancake Price: ")
        }
        this.earned_amount = {
            bubblegum: 202,         // input("Earned Bubblegum Price: "),
            toffee: 118,            // input("Earned Toffee Price: "),
            ice_cream: 2250,        // input("Earned Ice Cream Price: "),
            milk_chocolate: 1680,   // input("Earned Milk Chocolate Price: "),
            doughnut: 1075,         // input("Earned Doughnut Price: "),
            pancake: 80,            // input("Earned Pancake Price: ")
        }

        this.expenses = {
            staff: 5203,             // input("Staff expenses: "),
            other: 400,             // input("Other expenses: ")
        }
    }

    displayPrices() {
        console.log("Prices:");
        for (const key in this.menu) {
            console.log(`${modifyString(key)}: ${this.menu[key]}`)
        }
        console.log();
    }

    displayEarnedAmount() {
        console.log("Earned amount: ");
        for (const key in this.earned_amount) {
            console.log(`${modifyString(key)}: ${this.earned_amount[key]}`)
        }
        console.log();
    }

    displayIncome() {
        let earn_amount = sum(this.earned_amount);
        let expense_amount = sum(this.expenses);
        console.log(`Net income: $${earn_amount - expense_amount}`);
    }



}

function main() {
    const cafe = new Cafe();
    cafe.displayPrices()
    cafe.displayEarnedAmount()
    cafe.displayIncome();
}

main();