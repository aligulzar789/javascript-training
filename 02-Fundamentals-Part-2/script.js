'use strict';

// function describeCountry(country , population , capitalCity){
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// let myCountry = describeCountry('Pakistan', 200 ,'Islamabad');
// console.log(myCountry);
// let exampleCountry = describeCountry('Finland', 6 ,'Helsinki');
// console.log(exampleCountry);

// //function declaration
// function percentageOfWorld1(population){
//   return (population / 7900) * 100;
// }

// //function expression
// const percentageOfWorld2 = function (population){
//   return (population / 7900) * 100;
// }

// // arrow functions
// const percentageOfWorld3 = population => (population / 7900) * 100;



// const describePopulation = function (country,population){
//   const calcPerctage = percentageOfWorld1(population);
//   return `${country} has ${population} million people, which is about ${calcPerctage} of the world.`;
// }

// console.log(describePopulation('china', 1441));
// console.log(describePopulation('pakistan', 200));
// console.log(describePopulation('india', 1200));

// const calcAverage = (score1,score2,score3) => (score1 + score2 + score3)/3;

// const checkWinner = function (avgDolphins, avgKoalas){
//   if (avgDolphins >= (avgKoalas*2)){
//     return `Dolphons Win (${avgDolphins} vs ${avgKoalas})`;
//   }
//   else if (avgKoalas >= (avgDolphins*2)){
//     return `Koalas Win (${avgKoalas} vs ${avgDolphins})`;
//   }
//   else {
//     return `no winner`;
//   }
// }

// const avgDolphins = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);

// console.log(avgDolphins,avgKoalas,checkWinner(avgDolphins,avgKoalas));

// const percentageOfWorld1 = function (population){
//   return (population / 7900) * 100;
// }

// const populations = [1441, 200, 1200, 250];

// console.log(populations);

// console.log(populations.length === 4);

// const percentages = [percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2]),percentageOfWorld1(populations[3])];

// console.log(percentages);


// const neighbours = ['india','afghanistan','china'];
// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if(!neighbours.includes('Germany')){
//   console.log('Probably not a central European country :D');
// }
// let index = neighbours.indexOf('china');
// neighbours[index] = 'republic of china';
// console.log(neighbours);


// const calcTip = (bill) => (bill>=50 && bill<=300) ? (bill / 100) * 15 : (bill / 100) * 20;

// const bills = [125,555,44];

// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

// console.log(tips);

// const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]
// console.log(total);


// const myCountry = {
//   country : 'pakistan',
//   capital : 'islamabad',
//   language : 'urdu',
//   population : 200,
//   neighbours : ['india', 'china','iran'],
  
//   describe : function (){
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
//   },
//   checkIsland : function (){
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//   }
// };

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry['population']);
// myCountry.describe();


// const ali = {
//   firstName:'ali',
//   lastName:'gulzar',
//   job:'programmer',
//   birthYear:1992,
//   friend:[
//     'zain',
//     'salman',
//     'ali',
//     'asif'
//   ],
//   hasDriverLicense:true,
//   calcAge : function (){
//     this.age = 2021 - this.birthYear;
//     return this.age; 
//   },
//   // licenseCheck : function (){
//   //   return this.hasDriverLicense === true ? 'a' : 'no';
//   // },

//   description : function (){
//     return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriverLicense === true ? 'a' : 'no'} driver's license`;
//   }

// };
// console.log(`${ali['firstName']} has ${ali.friend.length} friends, and his best friend is called ${ali.friend[0]}`);
// console.log(ali.description());




// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height:1.69,

//   calcBMI : function(){
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// };
// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height:1.95,

//   calcBMI : function(){
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// };

// if(mark['calcBMI']() > john.calcBMI()){
//   console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
// }else{
//   console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
// }


// for (let i = 1; i <=50; i++){
//   console.log(`Voter number ${i} is currently voting`);
// }

// const percentageOfWorld1 = function (population){
//   return (population / 7900) * 100;
// }

// const populations = [1441, 200, 1200, 250];
// const percentage2 = [];

// for (let i = 0; i < populations.length; i++){
//   let perc = percentageOfWorld1(populations[i]);
//   percentage2.push(perc);
// }

// console.log(percentage2);

// const ali = ['ali','gulzar', 'programmer',1992,['zain','salman']];
// for (let i = 0 ; i < ali.length; i++){
//   if(typeof ali[i] !== 'string') continue;
//   console.log(typeof ali[i],ali[i]);
// }

// for (let i = 0 ; i < ali.length; i++){
//   if(typeof ali[i] === 'number') break;
//   console.log(typeof ali[i],ali[i]);
// }

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for(let i = 0; i < listOfNeighbours.length; i++){
//   for(let j = 0 ; j < listOfNeighbours[i].length; j++){
//     console.log(`Neighbour ${listOfNeighbours[i][j]}`);
//   }
// }

// const percentageOfWorld1 = function (population){
//   return (population / 7900) * 100;
// }

// const populations = [1441, 200, 1200, 250];
// const percentage3 = [];

// let i = 0;
// while(i < populations.length){
//   let perc = percentageOfWorld1(populations[i]);
//   percentage3.push(perc);
//   i++;

// }

// console.log(percentage3);

// const calcAverage = function (arr){
//   let sum = 0;
//   for (let i = 0 ; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum / arr.length; 
// }

// const calcTip = (bill) => (bill>=50 && bill<=300) ? (bill / 100) * 15 : (bill / 100) * 20;

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];

// const totals = [];

// for (let i = 0 ; i<bills.length; i++){
//   let tip = calcTip(bills[i]);
//   tips.push(tip);
//   let total = tip + bills[i];
//   totals.push(total);
// }

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));


const data = [17, 21, 23];

const printForecast = function (arr){
  let desc = '';
  for(let i = 0; i < arr.length ; i++){
    desc = desc + arr[i] + '°C in ' + (i+1) + ' days '; 
  }
  return desc;
}

console.log(printForecast(data));