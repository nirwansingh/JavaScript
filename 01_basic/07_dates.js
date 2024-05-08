let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());


// let myCreatedDate = new Date(2023, 0,23)
let myCreatedDate = new Date(2023, 0,23 , 5 ,3)
let myCreatedDate1 = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = new Date.now()
// console.log(myTimeStamp.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
newDate.toLocaleString('default', {
    weekday:"long"
})