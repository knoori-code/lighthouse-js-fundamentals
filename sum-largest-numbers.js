const sumLargestNumbers = function(data) {
  let highNum = 0
  let secondHighNum = 0
  for (let num of data) {
    if (num > highNum) {
      highNum = num;
    }
  }
  for (let num of data) {
    if (num > secondHighNum && num !== highNum) {
      secondHighNum = num;
    }
  }
  return highNum + secondHighNum
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2, 100, 5, 100000000000000]));