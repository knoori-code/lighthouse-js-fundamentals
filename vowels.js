const numberOfVowels = function(data) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let letter of data) {
    for (let vowel of vowels) {
      if (letter === vowel) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));