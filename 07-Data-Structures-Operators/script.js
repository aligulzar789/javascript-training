'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  const openingHours = {
    thu: {
      open: 12,
      name1:'ali',
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(){

  }

  
};


// const {thu:{open:x,close:e,abc:i=87}} = restaurant.openingHours;
// console.log(x,e,i);

// const arr = [1,2,3];
// const newAre = Object.assign([],arr);
// console.log(arr,newAre);
// arr[0]=34;
// console.log(arr,newAre);

// const avs = function(x,y,z){
//   console.log(x,y,z);
// }

// avs(...arr);


//coding challenge

const game = {
  team1: 'Bayern Munich', 
  team2: 'Borrussia Dortmund', 
  players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ], 
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ], 
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33, 
    x: 3.25, 
    team2: 6.5,
  }
};

// const [players1 ,players2]= game.players;
// console.log(players1,players2);
// const [gk,...fieldPlayers] = players1;
// console.log(gk,fieldPlayers);
// const allPlayers = [...players1,...players2];
// console.log(allPlayers);
// const players1Final = [...players1,'Thiago', 'Coutinho' ,'Perisic'];
// console.log(players1Final);
// const {team1,x:draw,team2} = game.odds;
// console.log(team1,draw,team2);
// console.log(game.odds.team1<game.odds.team2 || game.odds.team1>game.odds.team2);

// const printGoals = function(...players){
//   console.log(`${players.length} total goals`);
//   for(let i =0 ; i<players.length;i++){
//     console.log(players[i]);
//   }
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
// team1<team2 && console.log('Team 1 is going to Win');
// team1>team2 && console.log('Team 2 is going to Win');



const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours?.[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

for (const d of days.entries()){
  console.log(d);
}
const entries = Object.entries(openingHours);

for (const [a,{open,close}] of Object.entries(openingHours)) {
  console.log(a,open,close);
}





// for (const [num,name] of game.scored.entries()){
//   console.log(`Goal ${num + 1}: ${name}`);
// }

// let sum = 0;
// for (const value of Object.values(game.odds)){
//   sum += value;
// }
// console.log(sum / Object.values(game.odds).length);

// for (const [name, value] of Object.entries(game.odds)){
//   console.log(`Odd of ${name==='x' ? 'draw' : 'Victory ' + game[name]}: ${value}`);
// }
// console.log(Object.entries(openingHours));

// const scorers = {};
// for(const x of game.scored){
//   console.log(x);
//   if(scorers[x]){
//     scorers[x]+=1;
//   }else{
//     scorers[x] = 1;
//   } 
// }
// console.log(scorers);


const x = new Set(['pizza','sandwich','burger','pizza']);
console.log(x);
x.add('shawarma');
console.log(x);
x.delete('pizza');
console.log([...x]);

// question.get(question.get('correct') === answer);
const properties = Object.entries(openingHours);
console.log(properties);

const mapp = new Map([
  ['name','ali'],
  ['lastname',{
    a:'ali inner',
    b:'alib inner'
  }]
]);
console.log(mapp.get('lastname').a)


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
console.log(`An event happened,on average, every ${90/gameEvents.size} minutes`);
console.log(gameEvents);
for (const [time,event] of gameEvents.entries()){
  const str = time < 45 ? '[First Half]' : '[Second Half]';
  console.log(`${str} ${time}: ${event} `);

}