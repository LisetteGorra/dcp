// you are a cashier. When giving a customer change, you want to give the fewest number of coins possible. Use javascript to create an algorithym that provides the best immediate or local, solution. 

var changeOwed = .55; // least amount of coins is 4 , 1 quarter , 1 dime, 1 nickle, 1 penny
var coins = 0;
var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;

do {
    if (changeOwed >= .25) {
        changeOwed = changeOwed - .25;
        coins++; // mario coin sound
        quarters++
        changeOwed.toFixed(2);
    }

} while (changeOwed >= .25);


//dimes
do {
    if (changeOwed >= .10) {
        changeOwed = changeOwed - .10;
        coins++; // mario coin sound
        dimes++
        changeOwed.toFixed(2);
    }
} while (changeOwed >= .10);


do {
    if (changeOwed >= .05) {
        changeOwed = changeOwed - .05;
        coins++; // mario coin sound
        nickels++
        changeOwed.toFixed(2);
    }
} while (changeOwed >= .05);


do {
  if (changeOwed >= .01) {
        changeOwed = changeOwed - .01;
        coins++; // mario coin sound
        pennies++
        changeOwed.toFixed(2);
    }
} while (changeOwed >= .01);

console.log("Total coins:", coins);
console.log("quarters:", quarters);
console.log("dimes:", dimes);
console.log("nickels:", nickels);
console.log("pennies:", pennies);