const howManyHundreds = function(number) {
  let hundreds = number / 100 
  hundreds = Math.floor(hundreds)
  return hundreds
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
jkjfdkakdjjafkladsf