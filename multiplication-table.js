const multiplicationTable = function (maxValue) {
  let table = []
  for (let i = 0; i < maxValue; i++) {
    // Create arrays inside initial array
    table.push([])
  }
  // Create top row of array
  for (let j = 1; j <= maxValue; j++) {
    table[0].push(j)
  }
  // Fill in first number of each row
  for (i = 1; i < maxValue; i++) {
    table[i].push(i + 1)
  }
  for (i = 1; i < maxValue; i++) {
    row = table[i];
    for (j = 1; j < maxValue; j++) {
      row.push(table[0][j] * row[0])
    }
  }
  let stringVersion = ''
  for (i = 0; i < maxValue; i++) {
    stringVersion += table[i].join(' ') + '\n'
  }
  return stringVersion
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable(20));