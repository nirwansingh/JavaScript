const name = "nirwan"
const repoCount =3

console.log(name+repoCount); //poor syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("forza-horizon")

console.log(gameName[0]);
console.log(gameName.__proto__);
/* 
.chatAt
.toUpperCase
.indexOf
.lenth
.trim() removes white spaces
.replace('as' , 'dsa')
.includes('nirwan')
*/

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-3,2)
console.log(anotherString);

console.log(gameName.split('-'));


