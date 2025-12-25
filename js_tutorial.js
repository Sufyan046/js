// primitive types in javascript

// string
// js is a dynamically typed language-bcz the type is determined at runtime and can be changed as we see below x is first a string and then assigned null

// number

// float

// boolean

// undefined =default value


// reference types in javascript-obj, array, functions

// object

// notation to access object properties

// value types vs reference types

let x = "hello";
let y = x;

x= "educosys";
console.log(x); 
console.log(y); 


// reference types
let p= {name: "sufyan"};
let q= p;
// copied by reference

// changing p changes q also
p.name= "mohammed ";
console.log(p.name); 
console.log(p); 
console.log(q); 

// arrays in javascript
let courses = ["java", "js", "python",6,null];
console.log(courses[0]);
console.log(courses[2]);
console.log(courses[1]);
courses[1]= "c++";
console.log(courses[1]);
console.log(courses[4]);
console.log(typeof courses);
console.log(courses);
courses.push("ruby");
console.log(courses);
courses.pop();
console.log(courses);
courses.unshift("js");
console.log(courses);
courses.shift();
console.log(courses);

// functions in javascript
createCourse('dsa');
console.log(s);
// initially s is undefined due to hoisting
function createCourse(coursename){
    console.log('creating'+coursename);
}
var s=10;
console.log(s);
// later we can call s after its declaration
createCourse('lld');

// again and again calling createCourse with different course names  this is called function

// execution context is the term used to describe the environment in which the js is executed
// 1.before execution the memory is allocated for variables and functions-this phase is called memory creation phase>>hoisting 
//2.after memory creation phase comes the code execution phase where the code is executed line by line-thread of execution

//hoisting is the default behavior of moving declarations to the top    
// let , const are more strict in terms of hoisting
// they are in temporal dead zone from the start of the block until the declaration is processed   
// tdz is the time between entering scope and variable declaration
// accessing them before declaration results in reference error.
// avoid var and use let and const instead to avoid bugs due to hoisting.
// var declarations are hoisted and initialized with undefined
// function declarations are hoisted and initialized with the function object
console.log(a);
console.log(this.a); //in browser this refers to window object
console.log(window.a);
var  a =10;
console.log(a);
console.log(this.a); //in browser this refers to window object
console.log(window.a); //in browser this refers to window object
console.log(window);
console.log(this===window);

//variables hosting with let , const and var
// const and let are block scoped
// var is function scoped
let d =10;
const e=20;
var f=30;
// d and e are not added to window object and are not global variables so they come in temporal dead zone or period between the entering of the scope and their declaration so we get reference error if we try to access them before their declaration
// f is added to window object and is a global variable and is initialized with undefined due to hoisting
{
    let g =40;
    const h =50;
    var i =60;
    console.log(g);
    console.log(h);
    console.log(i); 
}
console.log(i);
// console.log(g); //g is not defined
// console.log(h); //h is not defined

function hello(){
    let j =70;
    console.log(j);
}
 let j =80;
 hello();
 // presidence of variables- local vs global within the function first local is searched then global 
 // but if it is not found in local inner scope then it is searched in outer scope and it does the access this is called lexical scoping.
    console.log(j);
    //so j here is 80 not 70 because we are outside the function hello and cannot access the local variable j of function hello from outside this is called variable shadowing the other j is shadowed by this j.

// deep dive into functions they are first class citizens in js because
// 1. they can be assigned to variables
// 2. they can be passed as arguments to other functions
// 3. they can be returned from other functions and even can be created inside other functions.

function add (k,l){
    return k+l;
}
console.log(add);
console.log(add(2,3));


let sum = function  (k,l){
    return k+l;
}
console.log(sum);
console.log(sum(4,5));
// therefore functions can be assigned to variables and passed around like other variables and data types.


// functions can be passed as arguments to other functions
// higher order functions- functions that operate on other functions either by taking them as arguments or by returning them.in below example operate is a higher order function because it takes other functions as arguments which are sum and diff.
// here operate function takes operationFunc as argument which can be sum or diff function and calls it with k and l arguments.therefore we can pass different functions to operate function to perform different operations.it is a higher order function because it takes other functions as arguments.
let diff = function  (k,l){
    return k-l;
}
function operate(operationFunc,k,l){
    return operationFunc(k,l);
}
console.log(operate(diff,10,4));
console.log(operate(sum,10,4));


// Arrow functions in javascript are a more concise syntax for writing function expressions.
// they do not have their own this , arguments , super or new.target keywords.
// they are best suited for non-method functions and cannot be used as constructors.

let multiply = (k,l) => k*l;
// equivalent to let multiply = function(k,l){ return k*l; } we don't even need to write return keyword.

// functions being returned from other functions.

let m=10;
function outer(){
    m=20;
    function inner(){
        console.log(m);
    }
    return inner;
}
let returnedFuncVar = outer();
m=30;

m=80;
console.log(returnedFuncVar);
returnedFuncVar();
// the inner function is returned from outer function and assigned to returnedFuncVar variable and then called using that variable.it was just returned not called inside outer function.
//m is a reference type variable declared in global scope initially assigned 10.
// when outer function is called m is changed to 20 inside outer function.
// then inner function is returned and assigned to returnedFuncVar variable.
// m value is changed to 30 before calling returnedFuncVar but still it prints 20 because of closure property of js functions where the inner function retains access to the variables of outer function even after the outer function has finished executing.
// thus the inner function forms a closure with the variables of outer function.
// 30 is assigned to m in the global scope but inner function has its own scope where m=20 is present so it prints 20.
// closures are a powerful feature of javascript that allows functions to retain access to their lexical scope even when the function is executed outside that scope.means function along with its lexical scope is bundled together.this enables data privacy and encapsulation as we can create private variables and functions that are not accessible from outside the closure.
// outer is a higher order function that returns inner function which forms a closure with the variable m of outer function.
function outer() {
    let count = 0; // private variable
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}
let incrementCounter = outer();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
// output will be 1 2 3 4
// outer function has a function inner that increments and prints the count variable and lexical scope (reference to count variable).
// outer function returns inner function which is assigned to incrementCounter variable.
// when incrementCounter is called it increments and prints the count variable from its lexical scope.
// here count is a private variable that is not accessible from outside the closure.
// each time incrementCounter is called the count variable is incremented and printed.
// thus closures enable us to create private state and encapsulate functionality within a function scope.
// closures are widely used in javascript for various purposes such as data privacy, currying, partial application, and function factories.
// closure are functions with its lexical scope bundled together.
// to many closures may lead to memory leaks as the inner functions retain references to the outer function's variables preventing them from being garbage collected.
// therefore it is important to use closures judiciously and be aware of their memory implications.

// Non blocking asynchronous javascript
// callbacks- functions that are passed as arguments to other functions and are executed after some operation is completed. 
function fetchData(callback){
    setTimeout(() => {
        let data="data fetched";// simulating data fetching after 5 seconds
        callback(data,null); 
    },5000);
}

function handleData(data, error){
    if(error){
        console.error(error);
    }
    else{
        console.log(data);
    }
}
console.log('start');
fetchData(handleData);
// fetchData is called and handleData is passed as callback function to be executed after data is fetched.
// callback function is executed after 5 seconds when data is fetched.
// meanwhile the main thread continues executing other code without blocking.
// callback is a function passed as argument to another function to be executed later.
////////////////////////
// Event loop in callback mechanism is the process that handles asynchronous callbacks in javascript.
// it continuously checks the call stack and the callback queue.
// when the call stack is empty it takes the first callback from the queue and pushes it to the call stack for execution.
// this way asynchronous operations can be handled without blocking the main thread.
// event loop ensures that callbacks are executed in a non blocking manner allowing other code to run concurrently.
// thus event loop is a key component of javascript's asynchronous programming model enabling efficient handling of I/O operations and user interactions.

// problems with callbacks 
// callback hell- when multiple nested callbacks are used making the code hard to read and maintain.
// error handling- managing errors in nested callbacks can be complex and cumbersome.
// inversion of control- the flow of control is inverted as the callback function is called by the asynchronous operation making it harder to reason about the code.
// to overcome these problems promises and async/await were introduced in javascript providing a more structured and readable way to handle asynchronous operations.
// problems - pyramid of doom and callback hell
// to avoid callback hell we can use promises and async/await- PROMISES

// Promise is an object representing the eventual completion or failure of an asynchronous operation. using promises we can chain multiple asynchronous operations together in a more readable way avoiding nested callbacks.
// object has 3 states they are
// pending-initial state neither fulfilled nor rejected
// fulfilled-operation completed successfully
// rejected-operation failed

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        },5000);
    });
}
// resolve function is called when the asynchronous operation is successful and reject function is called when there is an error.
//reject function is called when there is an error.

// sequential execution of asynchronous operations using promises..
getData()
    .then((result) => {

    })
    .catch((error) => {
        console.error(error);
    });

// .then method is called when the promise is fulfilled and .catch method is called when the promise is rejected.
// we can chain multiple .then methods to perform sequential asynchronous operations.
// thus promises provide a cleaner and more manageable way to handle asynchronous operations in javascript compared to callbacks.
// they help avoid callback hell and make error handling easier.
// better version is below using async/await
async function fetchData(){
    try{
        const result = await getData();
        console.log(result);
    }catch(error){
        console.error(error);
    }
} 
fetchData();
// async function returns a promise and allows the use of await keyword inside it.
// await keyword is used to wait for a promise to be fulfilled before proceeding further.


// FUnctions to manipulate arrays are map, filter, reduce..
const nums = [1, 2, 3, 4, 5];
console.log(nums);
const doubledNums = nums.map((num) => 2*num);
console.log(doubledNums);

// Filter 
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums);

// Reduce eg1 - finding sum of all numbers in an array
const sumOfNums = nums.reduce((accumulator, num) => accumulator + num, 0);
console.log(sumOfNums);

// reduce eg2- finding product of all numbers in an array
const productOfNums = nums.reduce((accumulator, num) => accumulator * num, 1);
console.log(productOfNums);
// these functions provide a functional programming approach to manipulate arrays in javascript making the code more concise and readable.
