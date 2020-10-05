// ⭐️ Example Challenge START ⭐️
/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
    return callback(stringList[0]);
}
// invoke the function
// notice that an arrow function is included as a parameter - the entire function, not only the name
processFirstItem(stringList, (str) => str + str);



// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * A: counter1 has closure because when invoking the variable counter1, counterMaker will return the actual count after it increments.
 *    However, counter2 does not have closure because after calling the function the memory will be lost. The initialization of the counter
 *    variable variable should be local, yet we would invoke the nested function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * A: The counter1 function uses closure with the nested function which would need to be invoked when called.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * 
 * A: The counter2 code would be preferable when we want to restart the count to 0, otherwise if we want to actually
 *    keep track of the increment throughout a longer process closure as it is shown in counter1 would be preferable.
 *
 */

// counter1 code
// function with no parameters
function counterMaker() {
    // declare a local counter
    let count = 0;
    // return a function that increments the count variable
    return function counter() {
        count++;
    }
}
// function call with return value stored in counter1 variable
const counter1 = counterMaker();

// counter2 code
// declare a global variable outside function
let count = 0;

// function defn for counter2 function
function counter2() {
    // returns incremented value for count
    return count++;
}


/* Task 2: inning() 
  
Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
    // generate of random number between 0 and 2
    let points = Math.floor(Math.random() * 3);
    // Math.round will do this: 0 > 0.49, 0.5 > 1.49, 1.5 > 2.49 
    // Math.floor 0 1 2
    // return the score
    return points;
}

/* Task 3: finalScore()
  
Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns 
the final score of the game in the form of an object.
  
For example, 
  
finalScore(inning, 9); // expected output: {"Home": 11, "Away": 5} 
  
*/

// parameters are a function and a number
function finalScore(callBack, numInnings) {
    // points from each inning
    let numPoints = 0,
        homeScore = 0,
        awayScore = 0;
    // use for-loops to produce a score for each team, separately so the random scores are different random scores

    // calculate points for home team
    for (let i = 0; i < numInnings; i++) {
        numPoints += callBack();
    }
    // store the value in homeScore variable
    homeScore = numPoints;
    // must reset numPoints to 0, so we can start over for away team
    numPoints = 0;
    // calculate points for away team
    for (let i = 0; i < numInnings; i++) {
        numPoints += callBack();
    }
    // store the new value in numPoints in awayScore variable
    awayScore = numPoints;
    // after finding the values by using the callback function, put them into an object
    const theScore = {
        home: homeScore,
        away: awayScore
    };
    // return the object
    return theScore;
}

/* Task 4: 
  
Create a function called `scoreboard` that accepts the following parameters: 
  
(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings
  
and returns the score at each point in the game, like so:
  
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
  
Final Score: awayTeam - homeTeam */

// note
// I could show the score by typing in the console.log ${inning()} - ${inning()} or
// the getInningScore function will format it for me like this ${getInningScore(inning)}
// the getInningScore function already has formatting for awayTeam - homeTeam but needs inning as a parameter
// to actually input the score to that format...

// what am i supposed to do with getInningScore!
// i only needed inning function
function scoreboard(cbGetInningScore, cbInning, num) {
    // use for-loop to display the scoreboard
    for (let i = 1; i <= num; i++) {
        // just to be specific about -st -nd -rd -th suffixes use a modulus in conditionals
        // 
        if (i % 10 == 1) {
            console.log(`${i}st inning: ${cbInning()} - ${cbInning()}`)
        } else if (i % 10 == 2) {
            console.log(`${i}nd inning: ${cbInning()} - ${cbInning()}`)
        } else if (i % 10 == 3) {
            console.log(`${i}rd inning: ${cbInning()} - ${cbInning()}`)
        } else {
            console.log(`${i}th inning: ${cbInning()} - ${cbInning()}`)
        }
    }
}
// numInnings in baseball is 9 or more for overtime
scoreboard(getInningScore, inning, numInnings);