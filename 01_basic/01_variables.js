const accountId = 2314

/*to declare varible we can use two methods - let,var
prefer not to use var because
of issue in block scope and functional scope
*/

let accountEmail = "johndoe@gmail.com"
var accountPassword = "2580"
let accountState;

accountCity = "Bhopal" //not to use this type also

// accountId = 2 //not allowed
accountEmail= "johndoe2@gmail.com"
accountPassword ="12345"
accountCity ="Bangluru"
// console.log(accountId)
console.table([accountId , accountEmail , accountPassword 
    , accountCity , accountState])