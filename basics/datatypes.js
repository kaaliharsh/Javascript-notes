"use strict"  // treat all code as a new version of js

// alert(3+3)    we are using nodejs not browser

let name="harsh"
let age=18
let string="harsh"

let isTrue = true;
//null=> standalone value
//undefined=> variable deaclared but not given the value
//symbol => when talk abou the unique 

//object

console.table([name,age,string,isTrue])
console.log(typeof age);
console.log(typeof undefined);  //op--> undefined cuz it is an object in js
console.log(typeof Object);  //op----> return the function



//primitive datatypes are of 7 types in js : string, number, boolean, null, undefined, symbol and BigInt

// reference datatypes : Array, Objects and functions

// javascript is a dynamically typed language 

// array 
const heroes=["hatim", "shaktiman", "naagraj"]
console.log(heroes);


const myobj={
    name:"Harsh Deep",
    age: 22,
    color: "white"
}
console.log(myobj);



