const isEven = function(num) {
    return num % 2 === 0; // Returns true or false Boolean value
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

// to simplify, can just call function inside console.log
console.log(isEven(10));
console.log(isEven(11));