//const tinderuser = new Object() //singleton
const tinderUser = {}
//^non singleton obj

tinderUser.id = "123ab"
tinderUser.name ="nirwan"
tinderUser.isLoggedIn = false


// console.log(tinderUser); 

const regularUser = {
    email: "email@g.com",
    fullname: {
        firstname:"nirwan",
        lastname:"singh"
    }
}

console.log(regularUser.fullname?.firstname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({}, obj1 ,obj2)

const obj3 = {...obj1 ,...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email: "okok"
    },
    {
        id :2,
        email: "adasda"
    },
    {},{},{}
]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //returns an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('islLoggedIn'));


const {name : myName} = tinderUser
console.log(myName);