 'use strict';
// calcAge(1992);

// function calcAge(birthYear){
//   const age = 2037 - birthYear;
//   // console.log(firstName);
//   console.log('hello');
//   return age;
// }
// // const firstName = 'Ali';

// calcAge2();
// const calcAge2 = function(){
//   console.log('hello2');
// }

console.log(this);

function add(){
  console.log(this);
}
const add1 = function (){
  console.log(this);
}
const add2 = add1;

add2();

let a =1;
let b=2;
[a,b]=[b,a];
console.log(a,b);


