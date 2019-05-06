// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

var k = 17;
var numberList = [3, 15, 10, 7];
var sum; 
                                                //auto incrementer 
        for ( var z = 0; z < numberList.length; z++){
            console.log("o:", numberList[z]);
            for ( var y = 0; y < numberList.length; y++){
                    console.log(numberList[y]);
                if( numberList[y] == numberList[y]) {
                    // do nothing
                } else {
                    sum = numberList[z] + numberList[y];
                }
                
            }
           
        }
        