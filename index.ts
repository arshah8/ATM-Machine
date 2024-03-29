#!/usr/bin/env node

import inquirer from "inquirer";
console.log("***check code for password")
const password = 1237;
const totalBal = 200000;

//Color Class Reference : https://decipher.dev/30-seconds-of-typescript/docs/colorize/
export const colorize = new (class {
  color = (code: number, ended = false, ...messages: any[]) =>
    `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;
  black = this.color.bind(null, 30, false);
  red = this.color.bind(null, 31, false);
  green = this.color.bind(null, 32, false);
  yellow = this.color.bind(this, 33, false);
  blue = this.color.bind(this, 34, false);
  magenta = this.color.bind(this, 35, false);
  cyan = this.color.bind(this, 36, false);
  white = this.color.bind(this, 37, false);
  bgBlack = this.color.bind(this, 40, true);
  bgRed = this.color.bind(this, 41, true);
  bgGreen = this.color.bind(this, 42, true);
  bgYellow = this.color.bind(this, 43, true);
  bgBlue = this.color.bind(this, 44, true);
  bgMagenta = this.color.bind(this, 45, true);
  bgCyan = this.color.bind(this, 46, true);
  bgWhite = this.color.bind(this, 47, true);
})();
const color = colorize;

console.log("Card Entered Successfully");
console.log(color.bgCyan(" --Welcome to ATM Machine-- "));

const pass = await inquirer.prompt([
  {
    name: "input",
    type: "any ",
    message: " Enter your password:",
  },
]);
if (pass.input == password) {
  console.log("login successful");
} else console.log("Wrong password!");
for (;;) {
  const menu = await inquirer.prompt([
    {
      name: "balance",
      type: "list",
      message: color.bgBlue("Select an Option :"),
      choices: ["Total Balance", "Widthraw Money", "Exit"],
    },
  ]);
  if (menu.balance === "Total Balance") {
    console.log(
      color.yellow(" Your Total Balance is: ") + totalBal + " rupees"
    );
  } else if (menu.balance === "Exit") {
    break;
  } else if (menu.balance === "Widthraw Money") {
    console.log("Total Balance Present for Widthrawal: ", totalBal);
    const money = await inquirer.prompt([
      {
        name: "wop",
        message: "Select the Amount of Money you want to Widthraw :",
        type: "list",
        choices: ["> 2000", "> 5000", "> 10000", "> Enter Custom Amount"],
      },
    ]);
    if (money.wop === "> 2000") {
      console.log(color.bgMagenta(`Successfully Widthrawn ${2000} Rupees`));
    } else if (money.wop === "> 5000") {
      console.log(color.bgMagenta(`Successfully Widthrawn ${5000} Rupees`));
    } else if (money.wop === "> 10000") {
      console.log(color.bgMagenta(`Successfully Widthrawn ${10000} Rupees`));
    } else if (money.wop === "> Enter Custom Amount") {
      const moneyw = await inquirer.prompt([
        {
          name: "customInput",
          type: "any ",
          message: "Enter here (atleast 500 rupees):",
        },
      ]);
      console.log(
        color.bgMagenta(`Successfully Widthrawn ${moneyw.customInput} Rupees`)
      );
      if (moneyw.customInput > totalBal) {
        console.log("Not Enough Money OR Invalid Value.");
      } else if (moneyw.customInput <= 0) {
        console.log("Invalid Value.");
      } else if (moneyw.customInput < 500) {
        console.log("Minimum amout to Widthraw is 500 rupees.");
      }
    }
  }
}
