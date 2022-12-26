const conditionalSum = function(values, condition) {
  let sum = null;
  for (let num of values) {
    if (condition === 'even' && num % 2 === 0) {
      sum += num
    } else if (condition === 'odd' && num % 2 !== 0) {
      sum += num
    }
  }
  if (sum === null) {
    return 0
  }
  return sum
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));