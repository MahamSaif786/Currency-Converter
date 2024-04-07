#! /usr/bin/env node
import inquirer from "inquirer";

const currency :any= {
  USD: 1,
  EUR: 0.84,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};
         console.log("Welcome to Mahii Currency Converter");

let userAnswer = await inquirer.prompt(
    [
        {
                name: 'from',
                message: "Enter From Currency",
                type: "list",
                choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        },
        {
                name: "to",
                message: "Enter To Currency",
                type: "list",
                choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        },
        {
                name: "amount",
                message: "Enter your amount",
                type: "number",
        },
    ] 
);

 let fromAmount = currency[userAnswer.from]
 let toAmount = currency[userAnswer.to]
 let amount= userAnswer.amount
 let baseAmount = amount / fromAmount
 let convertedAmount = baseAmount *toAmount
 console.log(convertedAmount);

