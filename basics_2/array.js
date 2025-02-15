//   Array is a collection of diiferent elements in a single variable.
// defines with []   long bracket
// javascript arrays copy operation creates the shallow copies. shallow means it directly changes into the original array value

const myArr=[1,2,3,4,5]   // javascript arrays are resizable and mix of datatypes

console.log(myArr[2]);   // returns the index value of 2 i.e 3


// Arrays methods in javascript

myArr.push(6)
console.log(myArr);

myArr.pop()      // Popping the last element from the array
console.log(myArr);

console.log(myArr.includes(4));    // check the elements of the array and return if it available ( true or false )
console.log(myArr.indexOf(4));  // returns the index of the element


// slice and splice

console.log("A",myArr);
const myArrNew1=myArr.slice(1,3)  // includes the first, second but not third

console.log(myArrNew1);
console.log("B",myArr.splice(1,3));  // returns the first, second and third also.






















