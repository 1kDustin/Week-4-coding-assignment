// 1. Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’
let firstAndLastName = {
    firstName: 'Dustin',
    lastName: 'Schomburg'
};

console.log(`${firstAndLastName.firstName} ${firstAndLastName.lastName}`);


// 2. Write the same function as above as an arrow function with a different name.

const createFullName = (firstName, lastName) => firstName + ' ' + lastName;

console.log(createFullName('Pepper', 'Schomburg'));



// 3. Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
//      a. Using setTimeout, write an inline, anonymous (has no named assigned to it) arrow function in the callback parameter position.
//      The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.

setTimeout(() => {
    console.log('Time is Up!!')
}, 3000);




//      b. Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into 
//      the callback parameter position. Choose whatever length of time you want for the interval.

let askAreWeThereYet = () => {
    console.log('Are we there yet?');
}

setInterval(askAreWeThereYet, 4000);



// 4. In this step you are going to write a function that takes a callback to better understand how callbacks work.

function funnyJoke(joke) {
    console.log(joke);
}

function tellFunnyJoke(callback) {
    let joke = prompt('Why dont eggs tell jokes? Theyd crack each other up!');
    callback(joke);
}

tellFunnyJoke(funnyJoke);


// 5. Write a function named processSplicedValue that takes 3 parameters – an array, the index of the element to be 
// spliced from the array, and a callback that will process the sliced element.
// 5b. Inside the function, use the first two parameters to splice an element from the array.

let myArray = ['Dustin', 25, 'Pepper', 6, 'Dylan', 25, 'Tes', 6];

function processSplicedValue(myArray, element, callback) {
    myArray.splice(element, 1);
     callback(myArray);
}

processSplicedValue(myArray, 1, (newArray) => {
    console.log(newArray);
});


// 5c. Call the callback function and pass the spliced value into it.
let myArr = ['Dustin', 25, 'Pepper', 6, 'Dylan', 25, 'Tes', 6];

function processSplicedValue2(myArr, element, callback) {
   let value = myArr.splice(element, 1);
    callback(value);
}

processSplicedValue2(myArr, 1, (newArr) => {
    console.log(newArr);
});


// 5d. Outside of your function, create an array of strings, call processSplicedValue, and pass the array, an index number, and console.log into it. 
// For example: processSplicedValue(arrayName, 2, console.log);

let arrayOfStrings = ['Brooke', 'Dustin', 'Rylee', 'Jenny', 'Pepper', 'Noah', 'Abigail']
processSplicedValue(arrayOfStrings, 4, console.log)

// 5e. Call the processSplicedValue function again but this time pass in the alert method instead of console.log.

processSplicedValue(arrayOfStrings, 4, alert);

// 5f. Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.

processSplicedValue(arrayOfStrings, 4, (test) => {alert (test)})

// 5g. Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.

let final = (i) => {
    alert (i)
}

processSplicedValue(arrayOfStrings, 2, final);






// personal notes - I am setting the function on line 60 with the parameteres. When I call a function I need to list out the parameters in the
// same order as it was created because that is the way its expecting to read the call function.



// This is the answer to question #9 on week 3 quiz.

// let customerObjects = [{
//     name:'Tom',
//     itemsPurchased: [
//     'Apples',
//     'Grapes',
//     'Milk',
//     'Cheese',
//     'Eggs',
//     'juice'
//     ]
// }, {
//     name:'Cedric',
//     itemsPurchased: [
//     'Apples',
//     'Grapes',
//     'Milk',
//     'Cheese',
//     'Eggs',
//     'juice',
//     'Toilet Paper',
//     'napkins'
//     ]
// }, {
//     name:'Dustin',
//     itemsPurchased: [
//     'Apples',
//     'Grapes',
//     'Milk',
//     'Cheese'
//     ]
// }]

// let itemsPurchased = [];

// // console.log(customerObjects.filter(function(customer){
// //     return customer.itemsPurchased.length > 5
// // }));

// function customerWhoPurchasedMoreThanFiveItems(array){
//    let moreThanFive =  array.filter(function(element){
//        console.log(element);
//         return element.itemsPurchased.length > 5
//     })

//     itemsPurchased = moreThanFive
//     console.log("more than five", moreThanFive)
// }

// customerWhoPurchasedMoreThanFiveItems(customerObjects);

// .filter is asking element to scan through everything inside of the initial array