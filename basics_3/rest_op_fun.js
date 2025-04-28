function calculateTotal(...num){    // ... => rest operator, collect all remaining arguments of a function or elements of an array into a single array
 return num;
}
//console.log(calculateTotal(100,200,300));  // returns the complete value of numbers



// understanding rest by using the objects concepts

const user={
    username:"harsh",
    price:988

}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)