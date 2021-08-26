// Without using already built functions (such as reverse()), create a function that, given an initial array, returns a new array with all the items reversed.

// Some conditions:

// Items could be of any data type
// If you receive as an input anything else rather than an array, the function should return undefined

// Examples:

//ownReverse([4, 7, 10]) --> [10, 7, 4]
//ownReverse(['some', 'words, 'inside]) --> ['inside', 'words', 'some']
//ownReverse(['hello']) --> ['hello']
//ownReverse(4566) --> undefined

const ownReverse = (items) => {
   let arrayReverse = [];
   if (typeof items !== 'object') {
      return undefined;
   } else if (items.length > 0) {
      for (let i = items.length - 1; i >= 0; i--) {
         arrayReverse.push(items[i]);
      }
      return arrayReverse;
   } else return items;
};
console.log(ownReverse([4, 7, 10]));
console.log(ownReverse(['some', 'words', 'inside']));
console.log(ownReverse(['hello']));
console.log(ownReverse(4566));
