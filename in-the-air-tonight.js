const checkAir = function(samples, threshold) {
  let dirty = 0;
  let totalSamples = 0
  for (let state of samples) {
    if (state === 'dirty') {
      dirty += 1
    }
    totalSamples += 1
  }
  if ((dirty / totalSamples) > threshold) {
    return 'Polluted'
  } else {
    return 'Clean'
  }
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))