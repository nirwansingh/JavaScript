const user = {
    username: "nirwan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from data base");
        console.log(`username: ${this.username} has logged in $
        {this.loginCount} times.`);


    }
}
//this is object literals , when we need to create multiple users
// this will be a very hectic task using object literals
//thats why we use contructor and classes to make this efficient

// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date() // this new keyword is constructor here creates new context

function users(username, loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this
}

const userOne = new users("nirwan" , 10 , false)
const userTwo = new users("hitesh" ,10, true) 
//this redeclaration overrides the details of userOne !!!!!!we use new keyword
console.log(userOne);
console.log(userTwo);
// console.log(userOne.constructor);