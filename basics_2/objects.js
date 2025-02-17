// singleton --> Class is defined in such a way that only one instance of the class is created in the complete execution of a program or project. 

// object literals

// Object.create   // through constructor method

// declare the symbol

const mySymb=Symbol("key1")
const user={
    name:"Harsh Deep",
    [mySymb]:"myKey1", 
    age:22,
    location:"Greater Noida",
    email:"harsh@gmail.com",
    isLoggedIn:false,
    lastLogin:["Monday","Saturday"]
}
console.log(user.name);
console.log(user["age"]);
console.log( user[mySymb]);

// to freeze or unchange the object we use the freeze keywprd

Object.freeze(user)
user.email="deep@gmail.com"
console.log(user);






