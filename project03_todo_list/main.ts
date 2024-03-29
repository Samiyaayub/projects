#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("Welcome to Todo List App"));

let todos: string[] = [];
let loop = true;

while (loop) {
  let todoList: {
    todo: string;
   addMore: boolean;
  } = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "what you want to add in your Todos?",
    },

    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to add more Todos?",
      default: "false",
    },
  ]);
  let { todo, addMore} = todoList;
  console.log(todoList);
  loop = addMore;
  if (todo) {
    todos.push(todo);
  } else {
    console.log(chalk.bgRed("Kindly enter valid input"));
  }
   console.log(todos)
   if(todos.length > 0){
    console.log(chalk.bgGray("your todo list:"));
    todos.forEach((todo) => {
      console.log(todo)
    });
   }else{
    console.log(chalk.bgRed("Not todod found"))
   }
  }