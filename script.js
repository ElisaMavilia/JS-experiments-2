// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = '23';

const calcAge = birthYear => 2037 - birthYear;

console.log();
console.log(calcAge(1990));
 */

/* Given an array of temperatures of on day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 9, 5];

// understanding the problem
// breaking up into sub-problems
// What is the temperature amplitude? Temperature amplitude is the difference between the minimum and the maximum temperature that occurs within a specific recording time period. (e.g. last 24h): difference between the highest and the lowest in the array.
// How to compute the amplitude?
// Wath a senor error and what to do?
// How to ignore errors?
// Find a max value in temp array
// Find a min value in temp array
// Subtract min from max and return it

const calcTemAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const newArray = temps[i];
    if (typeof newArray !== 'number') {
      continue;
    }
    if (newArray > max) {
      max = newArray;
    }
    if (newArray < min) {
      min = newArray;
    }
    console.log('New Array: ', newArray);
  }
  console.log(max, min);
  let amplitude = max - min;
  return amplitude;
};

console.log(calcTemAmplitude(temperatures));