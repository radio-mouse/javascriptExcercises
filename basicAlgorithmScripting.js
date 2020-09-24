/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".*/

const reverseString = str => str.split(``).reverse().join(``)


/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Factorialize a NumberPassed

Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.

factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.*/

const factorialize = num => num > 1 ? num * factorialize(num - 1) : 1


/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

convertToF(0) should return a number
convertToF(-30) should return a value of -22
convertToF(-10) should return a value of 14
convertToF(0) should return a value of 32
convertToF(20) should return a value of 68
convertToF(30) should return a value of 86*/

const convertToF = celsius => celsius * (9 / 5) + 32


/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWordLength("May the force be with you") should return 5.
findLongestWordLength("Google do a barrel roll") should return 6.
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.*/

const findLongestWordLength = str => {
    const arr = str.split(` `)

    return arr.reduce((max, el) => {
        if (el.length > max) max = el.length
        return max
    }, 0)  
}


/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].*/

const largestOfFour = arr => {
    return arr.reduce((acc, el) => {
        acc.push(Math.max(...el))
        return acc
    }, [])
} 


/*------------------------------------------------------------------------
Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

confirmEnding("Bastian", "n") should return true.
confirmEnding("Congratulation", "on") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "sage") should return false.
confirmEnding("Open sesame", "game") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
confirmEnding("Abstraction", "action") should return true.
Your code should not use the built-in method .endsWith() to solve the challenge.*/

const confirmEnding = (str, target) => {
    const regex = new RegExp(target + `$`, `i`)
    return regex.test(str)
}


/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.

repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
The built-in repeat() method should not be used.
repeatStringNumTimes("abc", 0) should return "".*/

const repeatStringNumTimes = (str, num) => num > 0 ? str + repeatStringNumTimes(str, num - 1) : ``


/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".*/

const truncateString = (str, num) => num < str.length ? str.split(``).splice(0, num).join(``) + `...` : str


/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Finders Keepers

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined.

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.*/

const findElement = (arr, func) => {
    for (const el of arr) 
        if (func(el)) return el

    return undefined
}


/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Boo who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.*/

const booWho = bool => typeof bool === `boolean`


/* ------------------------------------------------------------------------
Basic Algorithm Scripting: Title Case a SentencePassed
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("I'm a little tea pot") should return a string.
Passed
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
Passed
titleCase("sHoRt AnD sToUt") should return Short And Stout.
Passed
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.*/

const titleCase = str => {
    const arr = str.toLowerCase().split(` `)
  
    return arr.reduce((acc, el) => {
        acc.push(el.charAt(0).toUpperCase() + el.slice(1))
        return acc
    }, []).join(` `)
}