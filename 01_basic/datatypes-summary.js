/*
diff of data types is considered here based on the basis of
how they are stored in the memory and how they are accessed 
from the memory

i.e, primitive also known as reference type
7 types : string, number , bool , null , undefined, symbol , bigInt

non primitive
i.e, Arrays , objects
 */

const bigNumber = 837284789374892748927n

const heros = ["shaktiman", "nagraj", "doga"];
let myObj ={
    name:"hitesh",
    age:22
}

const myFunction = function(){
    console.log("Hollow World");
}

//*******************************************************Memories */

//stack => primitive, provides a copy
// Heap => non - primitive, provides a reference that will in turn change the data

let user1 ={
    email: "user@google.com"
}

let user2 = user1

user2.email = "nirwan@google.com"

console.log(user1.email);
console.log(user2.email);