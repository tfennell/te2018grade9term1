
// **** Bank Account Object ****
// This object represents a bank account
// and includes properties of owner, withdrawalLimit, balance, and bankName
// it also has three methods that you will have to create!
let bankAccount = {
  owner: undefined,
  withdrawalLimit: 50,
  balance: 100,
  bankName: 'Chase Bank',
  deposit: function(amount) {
 let sum = this.balance + amount;
  this.balance = sum;
  console.log("Congratulations on your deposit")
    }
  },
  withdraw: function(money) {
let difference = this.balalance - money

  },
  createGreeting: function() {
    let greeting = "Hi, welcome to"+this.bankName+"My name is"+this.ownername
return greeting
  }
;


// **** Problem 1: Greet the User ****
// Update the property 'owner' to be your name
// Then fill in the createGreeting method so that it will RETURN a greeting,
// including the bank name and owner name
// Our tests will then print that returned greeting to the terminal
bankAccount.owner = "Tyfani"
// **** Problem 1 Tests ****
console.log('**** Problem 1 Tests ****');
console.log(`${typeof bankAccount.owner}... should be string`);
console.log(`${bankAccount.createGreeting()}... should include a greeting, ${bankAccount.owner}, and ${bankAccount.bankName}`);


// **** Problem 2: Deposit Monies ****
// Then fill in the deposit method
// It needs to take an argument to add to the bankAccount's balance
// and print a success message including the amount deposited

// **** Problem 2 Tests ****
console.log('\n\n**** Problem 2 Tests ****');
console.log(`Before depositing any money our balance was ${bankAccount.balance}`);
bankAccount.deposit(50);
console.log('Just ran the deposit... did it print a success message?');
console.log(`After the deposit our balance should be 150.... our current balance is ${bankAccount.balance}`);


// **** Problem 3: Withdraw Monies ****
// Then fill in the withdrawal method
// This one requires a bit more logic than the first two!
// This method will take an argument to withdraw from the bank Account
// If it doesn't exceed the withdrawalLimit and the balance and is above 0, remove the amount and print a success message
// Otherwise do not remove the amount and print a failure messages

// **** Problem 3 Tests ****
console.log('\n\n**** Problem 3 Tests ****');
let priorBalance = bankAccount.balance;
console.log(`Before withdrawing any money our balance was ${priorBalance}`);
bankAccount.withdraw(120);
console.log('Just ran the withdrawal but with too high an amount... did it print a failure message?');
console.log(`The balance should still be the same as before. \nPrior Balance: ${priorBalance}\nCurrent Balance: ${bankAccount.balance}`)
bankAccount.withdraw(20);
console.log('Just ran a successful withdrawal of $20. Was a success message printed?');
console.log(`The balance should have been decreased by $20. \nPrior Balance: ${priorBalance}\nCurrent Balance: ${bankAccount.balance}`)


// **** Problem 4: Object Methods ****
// Write code that represents any object you like. Your object should have at
// least four properties and four methods. At least two of your methods should
// utilize the "this" keyword to refer to properties, or call other methods,
// owned by the object.


// Test all of your object's methods below.
console.log('\n\n**** Problem 4 Tests ****');