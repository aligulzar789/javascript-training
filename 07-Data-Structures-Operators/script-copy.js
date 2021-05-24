'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  }
};


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

//Challenge 1
//.1
const [players1,players2] = game.players;
console.log(players1,players2);
//.2
const [gk,...fieldPlayers] = players1;
console.log(gk,fieldPlayers);
//.3
const allPlayers = [...players1,players2];
console.log(allPlayers);
//.4
const players1Final = [...players1,'Thiago', 'Coutinho' , 'Perisic'];
console.log(players1Final);
//.5
const {team1=1 , x:draw=1, team2=2} = game.odds;
console.log(team1,draw,team2);
//.6
const printGoals = function(...players){
  console.log(players.length);
  for (const name of players) console.log(name);
}
printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich');
printGoals(...game.scored);
//.7
team1<team2 && console.log(`Team 1 is going to Win`);
team1>team2 && console.log(`Team 2 is going to Win`);


//Challenge 2
//.1
for(const [i,name] of game.scored.entries()){
console.log(`Goal ${i + 1}: ${name}`);
}
//.2
let average = 0;
const odds = Object.values(game.odds);
console.log(odds);
for (const odd of odds){
  average+=odd;
}
console.log(average/odds.length);
//.3
for (const [team,odd] of Object.entries(game.odds)){
  const str = game[team] ? `Victory ${game[team]}` : 'draw';
  console.log(`Odd of ${str}: ${odd} `);
}
//.4
const scorers = {};
for (const name of game.scored){
  scorers[name] ? scorers[name]++ : scorers[name] = 1;
}
console.log(scorers);

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

//Challenge 3
//.1
const events = [...new Set(gameEvents.values())];
console.log(events);
//.2
gameEvents.delete(64);
console.log(gameEvents);
//.3
const last = [...gameEvents.keys()].pop();
const x = gameEvents.size;
console.log(`An event happened,on average, every ${last/x} minutes`);
// .4
for (const [min, event] of gameEvents){
  console.log(`[${min<=45?`FIRST`:`Second`} HALF]:${min} ${event}`);
}


//Challenge 4
document.body.append(document.createElement('textarea')); 
document.body.append(document.createElement('button'));

const text1 = 'underscore_case\n first_name\nSome_Variable\n  calculate_AGE\ndelayed_departure';
const textarea = document.querySelector('textarea');
textarea.value=text1;

const btn = document.querySelector('button');

btn.addEventListener('click',function(){
  const text = textarea.value;
  const names = text.split('\n');
  for (const [i,name] of names.entries()) {
    const [first,second] = name.toLowerCase().trim().split('_');
    const outPut = `${first}${second.replace(second[0],second[0].toUpperCase())}`
    console.log(`${outPut.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
});


/*
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/
for (const x of Object.entries(game.odds)){
  console.log(x)
}
