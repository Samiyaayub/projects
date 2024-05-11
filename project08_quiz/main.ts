#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.gray.bgMagenta.underline("welcome to my quiz game:"))
console.log(chalk.yellow.italic("you are required to gain maximum 4 points."))

let points = 0

//question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset of?",
        type: "list",
        choices: ["phyton", "c++", "java", "Javascript"]
    }
])

if(question1.one == "Javascript"){
    console.log(chalk.green("your answer is correct"))
    points++
}else{
    console.log(chalk.red("incorrect answer"))
}

//question 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of microsoft?",
        type: "list",
        choices: ["Elon Musk", "Bill Gates", "Mark Zukerberg", "Ali"]
    }
])

if(question2.two == "Bill Gates"){
    console.log(chalk.greenBright("your answer is correct"))
    points++
}else{
    console.log(chalk.red("incorrect answer"))
}

//question 3

let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "capital of Pakistan?",
        type: "list",
        choices: ["Karachi", "Punjab", "Islamabad", "KPK"]
    }
])

if(question3.three == "Islamabad"){
    console.log(chalk.greenBright("your answer is correct"))
    points++
}else{
    console.log(chalk.red("incorrect answer"))
}

//question 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current governor?",
        type: "list",
        choices: ["Ali", "Kamran Tessori", "Bilal", "Asad"]
    }
])

if(question4.four == "Kamran Tessori"){
    console.log(chalk.greenBright("your answer is correct"))
    points++
}else{
    console.log(chalk.red("incorrect answer"))
}

//question 5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "npm stands for ?",
        type: "list",
        choices: ["inquirer", "chalk", "github", "node package manager"]
    }
])

if(question5.five == "node package manager"){
    console.log(chalk.greenBright("your answer is correct"))
    points++
}else{
    console.log(chalk.red("incorrect answer"))
}

//output condition

if(points >= 4 ){
    console.log(chalk.bgCyan('congratulation!'))
    console.log(chalk.magenta(`your points:  ${points}`))
}else{
    console.log(chalk.bgRed("you loss! try next time"))
    console.log(chalk.magenta(`your points: ${points}`))
}

