// --- LET AND CONST ---

let x = 10;
{
    let x = 2;
}

// The {} are creating a new block. It creates an area where code written inside of the block does not interfere with code written outside of the
// block. Using let to declare a variable inside of a block will limit the variable to only that block. the let x = 2 does not impact the x outside
// of the block.
// If we were to use var instead of let it would have just changed the value of x even outside of the block.

const pi = 3.14159;
console.log(pi);

// const is used to create a constant. This means we cannot change the value of the variable once it is set. If we want top give someone a name and never
// change the value we will go will const to set the variable.


// --- TEMPLATE LITERALS ---

// Template literals enhance the way that we can work with strings by giving us some additional features. They look just like strings,
// yet instead of '' they use back ticks. `` 
// They allow us to be able to make multi-line strings.

let myString = `Hello
world
my
name
is
dustin.`;

console.log(myString);

console.log(`Six times five = ${5 * 6}`)

// This is a string literal. The string will be printed out and anything inside the ${} will be run as javascript.
// The $ is invocating a function. It is saying that what ever code is placed inside of the curly braces will be run as a function.
// This is also used if you sometimes need to use a different language.


// --- ARROW FUNCTION ---

// This new syntax makes writing new functions easier to write and read. However, it doesnt just change up the syntax to make it look pretty,
//  It binds the current scope to the function.

const createFullName = (firstName, lastName) => firstName + ' ' + lastName;
//using the arrow function here (=>) to tell the function what to do. Here is another way to write this code
const createFullNameTwo = (firstName, lastName) => `${firstName}  ${lastName}`;
// we dont need to add the space because we are calling two different variables and will added them together with a space.

console.log(createFullNameTwo('Pepper', 'Schomburg'));

// This ends up being a lot easier and quicker than writing out a normal function.
// If you have multiple lines or curly braces are needed and you need a result this is how we can write it..

const someFunction = (a, b) => {
    let result = '';
   for( let i = 0; i < b; i++) {
       result += a;
   }
   return result;
};

console.log(someFunction('Hello ', 3));
//Here we are saying a will be a strong and b will be a number. for instance if a said 'Hello' and b was 3. Hello would be printed 3 times.
// Also, in an arrow function, if you only have one parameter you dont need () around your parameter
// the best practice here is to declare out variables with const so the value of our functions will not be changed later on in the code.


// --- CALLBACKS ---

// JS is single threaded. This means it will only run one line of code at a time. Usually this isnt a problem until we have a line of code that
// reads or writes to an external program or has to wait for something outside of our codes control. When this happens the line of code waiting
// on an external recourse could end up blocking the following lines of code from running until this line of code completes.
// Which would be non-performant. JS does NOT wait for each line of code to finish to move on. It just goes down the list calling them.
// This wait JS can perform better when dealing with a code taking longer for some reason.

let userName = sentHttpRequest('getUser'); 
console.log(userName);

// in this situation we are requestion information from an external program. The console will log this as undefined because userName has not 
// returned yet. The console.log executed before the function had time to get the info it needed. This is where Callbacks come in handy.

// In JS functions are objects. Which means we can pass them into other functions as arguements.
// a calllback is when we pass a function into another function to be executed after that code is complete so it doesnt cause a delay. For example,

function logUserName(user) {
    console.log(user);
}

sentHttpRequest('getUser', logUserName);

// The way this works is the logUserName function is passed into the sendHttpRequest function as an argument. The sendHttpRequest function
// does everything it needs and then the last line of code in that function would be a call to our logUserName function where it passes
// the userName that it grabbed as an arguement. (user).

// You can also declare functions as arguements inside the function call anonymously rather than giving the function a name and passing it in.

sendHttpRequest('getUser', user => console.log(user));


// --- PROMISES ---

// a promise solves the same problem as a callback, except they are much easier to write and produce code that is much easier to read.
// a promise is an object that represent the eventual completion or failure of an asynchronus operation.
// This mean that asynchronus functions can return a promise and then we can use that promise to say when this resolves do something
// if the call was successful or do something else if the call was unsuccessful.



doSomethingThatReturnsAPromise()
    .then((value) => {
        console.log(value);
    }).catch((err) => {
        console.error(err);
    });

    //This function chains a then, which means run this function, then do "this", the catch is of it fails it will give us some kind of error.
    //we can use console.error to log it out as an error and make it red.
    // .then if its successful we get back some kind of value
    // .catch if it fails we get back an error.

    // --- the non arrow function way of doing this is...

    
function handleEvent(value) {
    console.log(value);
}
function handleError(err) {
    console.log(err);
}

doSomethingThatReturnsAPromise()
.then(handleEvent)
.catch(err);

