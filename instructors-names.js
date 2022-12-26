const instructorWithLongestName = function(instructors) {
  let count = 0;
  let bigName = 0;
  let longName = null
  for (let i = 0; i < instructors.length; i++) {
    count = 0
    let firstName = instructors[i].name;
    for (let letter of firstName) {
      count += 1
    }
    if (count > bigName) {
      bigName = count
      longName = instructors[i];
    }
  }
  return longName
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));