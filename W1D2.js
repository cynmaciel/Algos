// DATA TYPES
// strings
var myString = "Hello World" ; // "a", "2", " "
// numbers
var myNumber = 42; 
// boolean
var isTired = true; 
// arrays
var myArray = [1,2,3, "hello world", true]

var myNewVar = myArray

// predict the output
var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");

// prediction: 6, "hello hello"

// predict the loop
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);

// var j = 0


// prediction: 0, 4, 8, "outside the loop 12"

// Predict what the code does
function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
      
    for(var i=0; i<arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
      console.log("the current sum is: " + sum); 
    }
      
    console.log("the total is: " + sum);
      
  }
      
  getTotal([1, 3, 5]);
  