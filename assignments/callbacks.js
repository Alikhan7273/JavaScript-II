// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// function compute(param1, param2, callbackfunction) {
//   return callbackfunction(param1,param2);
// }
//Question 1:
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

console.log(items.length);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Question 2:
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
function lastItem(x){
  return x;
}
console.log(last(items,lastItem));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Question 3:
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

// ANSWER START HERE!
return cb(x + y);
}

function ReturnNum(x){
  return x;
}
console.log(sumNums(4,8,ReturnNum));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Question 4:
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

// ANSWER START HERE!
  return cb(x*y);
}

console.log(multiplyNums(3,5,ReturnNum))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const InList = list.includes(item);
  cb(InList, item);
}

contains('yo-yo', items, function(InList, item){
  if(InList) {
    console.log(`Question 5 - ${item} was found in the list!`);
  } else {
    console.log(`Question 5 - ${item} was not found in the list :(`);
  }
});












/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
