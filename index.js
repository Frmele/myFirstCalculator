'use strict';

///////////////////////////////////////////////////////////////////////////
// Example 1
console.log("Let's print out the multiplication tables");

let currentNumber = 2;
while (currentNumber <= 10) {
  let multiplyWith = 1;
  while (multiplyWith <= 10) {
    const multipliedNumber = currentNumber * multiplyWith;
    console.log(`${multiplyWith} times ${currentNumber} is ${multipliedNumber}.`);    
    multiplyWith++;
  }
  currentNumber++;
}




///////////////////////////////////////////////////////////////////////////
// Example 2
console.log("Let's print out all the multiplication table you're interested in.");
while (true) {
  const answer = prompt("Do you want to see the multiplication table for another number? Y/N");
  if (answer === "N") {
    // We exit the while loop so we don't need to do if-else here.
    break; 
  }
  
  if (answer === "Y") {
    const numberToMultiply = Number(prompt("For which number do you want to see the multiplication table?"));
    let multiplyWith = 1;
    while (multiplyWith <= 10) {
      const multipliedNumber = numberToMultiply * multiplyWith;
      console.log(`${multiplyWith} times ${numberToMultiply} is ${multipliedNumber}.`);    
      multiplyWith++;
    }    
  } else {
    console.log("Your answer was unclear");
  }
}

// my exercise

while (true) {
  const myAnswer = prompt("Would you like to make a calculation? Y/N");
  if (myAnswer === "N") {
    // We exit the while loop so we don't need to do if-else here.
    break; 
  }
if (myAnswer === "Y") {
    const myFirstNumber = Number(prompt("What is the first number? (Write a number)")); //4
    const myOperation = prompt("Which operation do you want to do? (Type: + or - or * or /)"); //+
    const mySecondNumber = Number(prompt("What is the second number? (Write a number)")); //8
    let calculationResult;
    switch (myOperation) {
          case '+':
            calculationResult = myFirstNumber + mySecondNumber;
            break;
          case '-':
            calculationResult = myFirstNumber - mySecondNumber;
            break;
          case '*':
            calculationResult = myFirstNumber * mySecondNumber;
            break;
          case '/':
            calculationResult = myFirstNumber / mySecondNumber;
            break;
          default:
            
            break;
        }
        
        if (calculationResult === undefined) {
              console.log("You did not submit a known operator, so I could not calculate");
              continue;
            }
            console.log(`${myFirstNumber} ${myOperation} ${mySecondNumber} = ${calculationResult}`);
          } else {
            console.log("Your answer was unclear");
          }
        }