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

/* const calcTemAmplitude = function (temps) {
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
  return max - min;
};

const amplitude = calcTemAmplitude(temperatures);
console.log(amplitude); */

// Problem 2:
// Function should now receive 2 arrays of temps
// With 2 arrays, should we implement functionality twice? No, just merge two arrays
// How to merge 2 arrays?
/* const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const calcTemAmplitudeNew = function (t1, t2) {
  const t3 = t1.concat(t2);

  let max = t3[0];
  let min = t3[0];
  for (let i = 0; i < t3.length; i++) {
    const newArray = t3[i];
    if (newArray > max) {
      max = newArray;
    }
    if (newArray < min) {
      min = newArray;
    }
    console.log('New Array: ', newArray);
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTemAmplitudeNew(array1, array2);
console.log(amplitudeNew); */

const array1 = [3, 5, 1];
const array2 = [9, 4, 5];
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    /* value: Number(prompt('Degrees celsius')), */ //The bug was that the prompt was a string, so I changed the typeof with the Number method
    value: 10,
  };
  // A) Find the bug
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  /* console.warn(measurement.value);
  console.error(measurement.value); */
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) identify the bug
console.log(measureKelvin());

//Using a debugger
const calcTemAmplitudeBug = function (t1, t2) {
  const t3 = t1.concat(t2);

  let max = 0; //here there is the bug: the bug is 0 as a value not as the array's index
  let min = 0; //here there is the bug
  for (let i = 0; i < t3.length; i++) {
    const newArray = t3[i];
    if (newArray > max) {
      max = newArray;
    }
    if (newArray < min) {
      min = newArray;
    }
    console.log('New Array: ', newArray);
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTemAmplitudeBug(array1, array2);
//Identify the bug
console.log(amplitudeBug);

//CHALLENGE
/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temparatures.

Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days "

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the proble-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

.1: Is every element of the array corresponding to a day?
    Day 1 = arr[0], Day 2 = arr[1] and so on
.2  How to make a day corresponding to the array's element? Index + 1 or arr.length?
.3 Using a for-loop to print every element of the array with the relative day
.4 transfor each element to a string
.5 Log string to console
*/

/* const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
let forecast = '';
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const days = i + 1;
    forecast += `... ${arr[i]}C in ${days} days ...`;
  }
  return forecast;
};
console.log(printForecast(arr1)); */

// Other way

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    const days = i + 1;
    const dots = ' ... ';
    forecast = forecast + `${dots} ${arr[i]}C in ${days} days`;
  }
  console.log(forecast);
};
printForecast(arr1);
