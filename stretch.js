/*###
Task 3 - Stretch Goals

After you have completed the requirements, ** create ** a new file called `stretch.js`
and practice more with closures.There are no tests
for these problems.

See if you can complete one or more of the following challenges:

1. Predict the output of the code below and explain why this is the output using what you learned today.
When you 're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

js
// immediately invoke this anonymous function with ();
function(){
    // a and b are not returned, and are local
    var a = b = 3;}();
// cannot reach into the function and see values of a and b
// a and b will not be defined globally
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

Ans: Both console.log statements will concatenate a boolean value to the string. Because a and b are local to the function,
    the console log will print false for both.

2. Write a function that would allow you to do this using a closure.(This is another interview question we 've seen before -
when you're ready for answers, view an explanation[here](https: //www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

 3. Research the differences between functional programming and object oriented programming.
 Then, describe the pros and cons of functional programming vs object - oriented programming.
 This is a common interview question and great practice! */