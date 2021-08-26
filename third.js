//Without using already build in functionalities for this purpose (like toLocaleString), build your own functionality to add commas to split numbers as needed. You should put a comma every third digit from the right.

// Some conditions:

// It will only receive numbers greater than 0
// If it receives any other data type rather than a number as an argument, it should return undefined
// The output should be a string

// Examples:

// ownToLocaleString(10000)  --> '10,000'
// ownToLocaleString(458370)  --> '458,370'
// ownToLocaleString(1000000)  --> '10,000,00'
// ownToLocaleString(345)  --> '345'
// ownToLocaleString(45)  --> '45'
// ownToLocaleString('hello')  --> undefined

const ownToLocaleString = (number) => {
   if (number > 3) {
      let result = number.toString().split('');
      for (let i = result.length - 3; i > 0; i = i - 3) {
         result.splice(i, 0, ',');
      }
      return result.join('');
   } else return undefined;
};

console.log(ownToLocaleString('70'));
console.log(ownToLocaleString('100000000'));
console.log(ownToLocaleString('helloooo'));
console.log(ownToLocaleString('345'));
console.log(ownToLocaleString('1234'));
