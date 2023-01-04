const repeatNumbers = function(data) {
  let numString = '';
  let x = 0
  for (let i = 0; i < data.length; i++) {
    if (data.length === 1) {
      while (x < data[i][1]) {
        numString += data[i][0];
        x += 1;
      }
    } else {
      while (x < data[i][1]) {
        numString += data[i][0];
        x += 1;
      }
      x = 0;
      if (i < data.length - 1) {
        numString += ', ';
      }
    }
  }
  return numString
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));