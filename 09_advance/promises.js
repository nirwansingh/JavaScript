//file access is not directly accessed bu program
// request is sent to kernal then kernal reads the file
//then sends the information to file

//promise has three states->
//pending,fullfilled,rejected

//promise is a object representing eventual completion

const promiseOne  = new Promise(function (resolve , reject){
    //do async task
    // db calls , cryptography , network
    setTimeout(() => {
        // console.log('Async task is complete');
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    // console.log("promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(() => {
        // console.log("Async task 2 is given");
        resolve()
    }, 1000);
})

.then(function(){
    // console.log("Async task 2 is done");
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"nirwan" , email: "user@js.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "nirwan", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=> {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> 
    console.log("promise is either resolve or rejected")
)

const promiseFive= new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "12345"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

// promiseFive.then()
async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.