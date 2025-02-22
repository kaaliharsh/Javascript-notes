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


//--------------------------------------------------------------------------------
// singleton object -->

const userName=new Object();
userName.id="kaaliharsh",
userName.name="Harsh",
userName.isLoggedIn=false
console.log(userName);

// Non-singleton object --->

const UserName={}

console.log(UserName);

//----------------------------------De structuring--------------------------------

const course={
    coursename:"Java",
    price:"999",
    instructor:"Harsh Deep"
}

// course.instructor

const {instructor}=course
console.log(instructor);

// props type in react
const navbar=({company}) => {    // de-structuring

} 

navbar(company="harsh") 
    
 
//--------------------------------------------APIs-> Application programming interface--------------------------------------



 




