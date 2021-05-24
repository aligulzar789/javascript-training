// const country = "Pakistan";
// const continent = "Asia";
// let population = 200;
// const isIsland = false;
// const language = "Urdu";

// console.log(population / 2);
// population++;
// console.log(population);

// console.log(population > 6);

// console.log(population < 33);

// let description = country + " is in " + continent + " , and its " + population + " million people speak " + language;

// console.log(description);

// let description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(description1);

// console.log(`${country}'s population is ${population >= 33 ? 'above' : 'below'} average`);




// let markHeight = 1.69;
// let markMass = 78;
// let johnHeight = 1.95;
// let johnMass = 92;

// let markBMI = markMass / markHeight ** 2;
// console.log(markBMI);
// let johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI);

// let markHIgherBMI = markBMI > johnBMI;
// console.log(markHIgherBMI);




// const firstName ='Ali';
// const job = 'Programmer';
// const birthYear = 1992;
// const year = 2020;

// const desc = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job ;
// console.log(desc);

// const desc1 =`I'm ${firstName} a ${year - birthYear} years old ${job}`;
// console.log(desc1); 




// let markHeight = 1.69;
// let markMass = 78;
// let johnHeight = 1.95;
// let johnMass = 92;

// let markBMI = markMass / markHeight ** 2;
// console.log(markBMI);
// let johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI);

// if(markBMI > johnBMI){
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
// }
// else{
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
// }




// let car = { model:1,model1:2};
// console.log(car['model2']);

// console.log('9' - '5', 4);
// console.log('19' - '13' + '17' , '617');
// console.log('19' - '13' + 17 , 23);
// console.log('127' < 57 , false);
// console.log(5 + 6 + '4' + 9 - 4 - 2 , 1143);




// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1){
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1){
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }


// const country = "Pakistan";
// const continent = "Asia";
// let population = 34;
// const isIsland = false;
// const language = "English";

// if(language === "English" && population < 50 && !isIsland){
//   console.log(`you should live in ${country}`);
// }else{
//   console.log(`${country} does not meet your criteria.`)
// }


// const scoreDoplphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDoplphins,scoreKoalas);

// if  (scoreDoplphins > scoreKoalas && scoreDoplphins >= 100){
//   console.log("Dolphins Team is the Winner");
// } else if (scoreDoplphins < scoreKoalas && scoreKoalas >= 100){
//   console.log("Koalas Team is the Winner");
// } else if (scoreDoplphins === scoreKoalas && scoreKoalas >= 100 && scoreDoplphins >= 100){
//   console.log("The match is draw");
// } else{
//   console.log("No Team is the Winner");
// }

// const day = 'monday';

// if (day === 'monday'){
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === 'tuesday'){
//   console.log("tuesday");
// } else if (day === 'wednesday' || day === 'thursday'){
//   console.log("wednesday or thursday");
// } else if (day === 'friday'){
//   console.log("friday");
// } else if (day === 'saturday' || day === 'sunday'){
//   console.log("saturday or sunday");
// } else {
//   console.log("not a valid day");
// }


// const language = "Urdu";

// switch (language){
//   case 'chinese':
//   case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too :D');
              
// }

let tip;
const bill = 430;

if (bill >= 50 && bill <= 300 ){
  tip = (bill * 15)/100;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);
} else{
  tip = (bill * 20)/100;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);
}
tip = (bill >=50 && bill<=300) ? (bill * 15)/100 : (bill * 20)/100;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);

