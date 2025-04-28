
var c=300   // global scope
let a=200    // global scope

  //  {}  --> scope 

  if(true){     // block scope
    let a=8;
const b=10;
var c=20;
  }


console.log(a);
//console.log(b);
console.log(c);


