const sayHello = function(name) {
    console.log('Hello, ' + name)
}

sayHello('Khalid')
sayHello('Ibby')
sayHello('Aaisha')

// Using console.log() to print message
const sayHelloToConsole = function(name) {
    console.log('Hello, ' + name);
}
sayHelloToConsole('John');


// Using return to return a value
const returnSayHello = function(name) {
    return "Hello, " + name;
}
const greeting = returnSayHello('John')
console.log(greeting);
// The value returned can be stored in a variable to be used later. Can use greeting in console.log to display message
