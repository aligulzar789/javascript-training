'use strict';

// const flight = 'LHA123';
// const ali = {
//   name:'ali gulzar',
//   passport: 123213
// }


// const checkIn = function(flightNum,passenger){
//   console.log(flightNum,passenger);
//   passenger.name='ali update';
//   console.log(flightNum,passenger);
// }

// checkIn(flight,ali);

// console.log(ali);

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const a = greet('Hey')('ali');
// console.log(a);


// const lufthansa = {
//   airline:'Lufthansa',
//   iataCode: 'LH',
//   bookings:[],
//   book(flightNum,passenger){
//     this.bookings.push({name:`${this.iataCode}${flightNum}`,passenger});
//   }
// }

// lufthansa.book(23,'ali');
// console.log(lufthansa);

// const book = lufthansa.book;

// const aaa = book.bind(lufthansa,1);
// aaa(24,'ali update');
// console.log(lufthansa);

// const addTax = (rate,value) => value + value * rate;

// console.log(addTax(.1,100));

// const addTax1 = (rate) => (value1) => value1 + value1 * rate;
// const addtax2 = addTax1(0.23);
// console.log(addtax2(100));


//coding challenge 1

const poll = {
  question: "What is your favourite programming language?", 
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section! 
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`));
    console.log(answer)
    typeof answer === 'number' && answer<this.options.length && this.answers[answer]++;
    this.displayResults();
    this.displayResults('string'); 
  },
  displayResults(type='array'){
    if(type==='array'){
      console.log(this.answers);
    } else if (type==='string'){
      console.log(`"Poll Results are ${this.answers.join(',')}".`)
    }
  }
};

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));
poll.displayResults.call({answers:[5,2,4]},'string');


function function1(){

}

(function(){
  console.log('x');
})();

(() => {
  console.log('y');
})();

const a1 = function(){
  let a = 0;
  return function(){
    a++;
    let b=0;
    console.log(a);
    return function(){
      b++;
      a++;
      console.log(b,a);
    }
  }
}
const x = a1();
x();
const x1 =x();
x1();


(function () {
  const header = document.querySelector('h1'); 
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click',function(){
    header.style.color = 'blue';
  });
})();




