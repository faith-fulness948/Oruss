// Getting references to the button and the count display
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const count = document.getElementById("count");

count.innerText = 0

increase.addEventListener("click", function(){
    let currentcount = parseInt(count.innerText);
    currentcount +=1;
    count.innerText = currentcount;
});

decrease.addEventListener("click", function(){
    let currentcount = parseInt(count.innerText);
    currentcount -=1;
    count.innerText = currentcount;
});

let a = 2;
let b = 3;


console.log (a+b);


// Variables and Values
let myName = "Faithfulness"
let myAge = 5;
let myTribe = "Yoruba"

console.log (myName)

// Number methods assignment

let num = 123.4567

console.log(num.toPrecision(4));

console.log(num.toExponential(4));

console.log(num.valueOf());

// String method assignment

let namme = "Faithfulness"

console.log(namme.toUpperCase());

console.log(namme.toLowerCase());

let text = "       bingo       "
console.log(text.trim());

let msg = "God is Good"
console.log(msg.includes("Good"));

console.log(msg.replace("Good", "Great"));


let probString = "  oLaDokuNBo ajaYi   ";
// Oladokunbo Ajayi


let properString = probString.trim(); //Removing extra spaces
console.log(properString); //Logging the result
let splittedString = properString.split(" "); //Creating an array with the string
let firstSplittedString = splittedString[0].charAt(0).toUpperCase() + splittedString[0].slice(1).toLowerCase(); //Getting the first element in the array and converting the first letter to uppercase and subsequent letters to lowercase.
let secondSplittedString = splittedString[1].charAt(0).toUpperCase() + splittedString[1].slice(1).toLowerCase(); //Getting the second element in the array and converting the first letter to uppercase and subsequent letters to lowercase.

let correctedString = firstSplittedString + " " + secondSplittedString;
console.log(correctedString);



let message = `Welcome to our restaurant! 
Today's special is beef pasta
Enjoy your meal`;

console.log(message);

let isRaining = true;
if (!isRaining) {
    console.log("Go for a walk")

} else {
    console.log("take an umbrella");
    
}


/* Operators 
   1. Arithmtic Operators
      a. Addition operator +
      b. Subtraction operator -
      c.Multipication operator *
      d. Division operator /
      e. Modulus Operator %
      f. Exponential operator **
      g. Increment Operator ++
      h. Decrement Operator --
    2. Assignment Operator
      a. Simple Assignment Operator =
      b. Add and Assign Operator +=
      c. Subtract and Assign Operator -=
      d. Multiply and Assign Operator *=
      e. Divivde and Assign Operator /=
    3. Comparison Operator
       a. Equality Operator ==
       b. Strictly Equality Operator ===
       c. Not Equality Operator !=
       d. Strictly Not Equality Operator !==
       e. Greater Than Operator >
       f. Less Than Operator <
       g. Greater Than or Equal to Operator >=
       h. Less Than or Equal to Operator <=
    4. Logical Operators
       a. AND Operator &&
       b. OR Operator ||
       c. NOT Operator !
    5. Ternary Operator ?


*/



console.log(6 % 4 ); // This will return 2 (Remainder)

let number5 = 2;
console.log(++number5); 

// And Operator
console.log('z'>= 'r'&& 2<1);

// OR Operator

console.log();
// isNAN stands for is not a number

// Ternary Operator 

let var1  = 15;
// isNaN(var1)? console.log("this is a number")


let day = "Monday"

switch (day) {
    case "Monday":
        console.log("Start of the week");
        
        break;

    case "Tuesday":
        console.log("Today is Tuesday");
        
        break;

    case "Wednesday":
        console.log("Today is Wednesday");
        
        break;
    case "Thursday":
        console.log("Today is Thursday");
        
        break;
    case "Friday":
        console.log("Weekend is Near");
        
        break;
    case "Saturday":
        console.log("Rest at home");
        
        break;
    case "Sunday":
        console.log("Go to Church and Worship God ");
        
        break;

    default:
        console.log("Invalid Day");
        
        break;
}

let age = 11;

if (age<=12) {
    console.log(`you are not a teen, you have`)
}
else if (age>=13) {
    console.log("You are already a teenager");
}
else if  (age>=18) {
    console.log("You are already an adult by law");
}
else {
    console.log("Enter a valid age");
}
/*
Array and Array Methods
 1.length
 2.SQuare braces notation
 3. join
*/

let w = [2, 3];
let x = [4, 5];

let resultx = (w. concat(x))
console.log(resultx);


console.log(w.indexOf(4));


/* 
Object an Objects Method
 1. Dot or Square braces Notation
 2. Delete
 3. Object.seal() --> Stops you from adding new key and value pair to an object, but you can update an already existing one
 4. Object.freeze() --> Stops you from adding a new key value pair and aslo stops you from modifying an existing one.
 5. Object.keys() --> Return all the keys in an array
 6. Object.values()--> returns all the values in an array
 7. Object.entries()--> Returns both key and values in a new array
 8. this --> 

*/

const object1 = {
    named : "Julius Ceaser",
    nationality : "Italian",
   ethnicity : "Roman",
}

object1.family = {
    mother : "shsbnd",
    wives : ["nnnjj", "djjdjj"]
}


console.log(object1.family["wives"]);


let nummm = ["Precious", "Purity", "Faith"];
let [fair, dark] = nummm;

console.log(fair);
console.log(dark);


let arr =[[1,2], [3,4]]


console.log(arr[0]);
 let obj = {
    nummmmmm: 20,
    bank: "but",
}
console.log(Object.keys (obj));

/*
  Loops
   1. for loop
    a for...of loop
    b. for...in loop
   2. while loop
   3. do....while loop
*/


// for loop

for (let i = 0; i< 10; i++) {
    console.log(i);
    
}

const animals = ["Antelope", "Beetle", "Cat", "Dog", "Elephant", "Fish", "Goat"];
for (let i = 0; i< animals.length; i++) {
    console.log(`${animals[i].substring(0, 1)} is for ${animals[i]}`);
    
}


//while loop

let counter = 0;

while (counter<10) {
    console.log(counter);
    counter++;
    
}

//do...while loop

// do  {
//     console.log(`Looped counter is at ${counter}`);
//     counter++
    
// } while (counter>0)


// for ..of loop

const arr4 = [4, 8, 12, 16, 20, 24, 26, 28, 32];

for(let arr of arr4){
    console.log(arr * 2);
    
}

// for...in loop
for (let key in object1){
    console.log(`${key}`);
    
}

// continue

/*
   Array Iteration methods
   1. forEach()
   2. map()
   3. filter()
*/

// forEach()
const arr5 = ["head", "hand", 'leg']

arr5.forEach((el) => console.log(el))

//map()
const mapperdArr5 = arr5.map((el) => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase());
console.log(mapperdArr5);

//filter()

const filteredArr5 = mapperdArr5.filter((el) => el.includes("e"));
console.log(filteredArr5);

 

// Assignment

//multiplication table five

for (let i = 1; i<= 20; i++) {
    console.log(`5 X ${i} = ${5*i}`);
    
}

// multiples of 7
for ( let i = 1; i<= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);   
    }
}


// even numbers
for ( let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i); 
    }
}

// odd numbers
for ( let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//Function
function add (a, b) {
    const c = a + b;
    return c;
}

console.log(add(10, 5));

function capitalizer(sentence) {
    const capitalizedSentence = sentence.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return `This is your original string: ${sentence}\nThis is your capitalized string:${capitalizedSentence.join(" ")}`
    
}

const capitalizedStr = capitalizer("olaoSHEbikan joSHUa")
console.log(capitalizedStr);

/*
   Types of Function
1. Function Declaration
2. Function Expression
3. Arrow Function
4. Higher Order Function
5. Anonymous Function
6. Callback Function
7. IIFE Function - Immediately Invoked Function Expression
*/

// Function Expression

const greeting = function (name){
    return `Hello ${name}`
}

console.log(greeting("FayFay"));


// Arrow Function
const divide = (a,b) => a/b;
console.log(divide(10, 2));

//Higher Order Function


/*
 Scope
1. Global Scope
2. Local  Scope
3. Lexical Scope
*/


const tools = [
    {browser : "Chrome"},
    {editor : "VS Code"},
    {simulator : "Mobile Simulator"},
]

function show() {
   return tools; 
}

console.log(show());

//Asynchronous Javascript
console.log('Task 1');
setTimeout(() => {
    console.log('Task 2');
}, 5000);
console.log('Task 3');

setInterval(() => {
    window.alert("SLAP YOURSELF")
}, 1000000);


//Async Function
const fetchPosts = async () => {
 try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');



    const posts = await data.json()
    console.log(posts.slice(0, 10));



 } catch (err) {
     console.error("Error", err);
     
 }
}

fetchPosts();

