'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements,sort = false){
  containerMovements.innerHTML = '';

  const mov = sort ? movements.slice().sort((a,b)=> a-b) : movements;

  mov.forEach((movement,index) => {
    const type = movement > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__value">${movement}€</div>
    </div>
  `;
  containerMovements.insertAdjacentHTML("afterbegin",html);
    
  });
}

const calcBalance = function(acc){
  acc.balance = acc.movements.reduce((acc,mov)=>{
    return acc + mov;
  },0);
  labelBalance.textContent = `${acc.balance}€`;
}

const calcSummary = function(acc){
  const income = acc.movements.filter(mov => mov > 0).reduce((acc,mov) => acc+mov,0);
  labelSumIn.textContent = `${income}€`;
  const outcome = acc.movements.filter(mov => mov < 0).reduce((acc,mov) => acc+mov,0);
  labelSumOut.textContent = `${outcome}€`;
  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate)/100).filter(int => int>=1).reduce((acc,int) => acc + int,0);
  labelSumInterest.textContent = `${interest}€`;
}

const updateUI = (acc) => {
  displayMovements(acc.movements);
  calcBalance(acc);
  calcSummary(acc);
}

const generateUsernames = function(accs){
    accs.forEach(acc => {
      acc.username = acc.owner.toLowerCase().split(' ').map((name)=> name[0]).join('');
    });
}

generateUsernames(accounts);

let currentAccount;

btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if(currentAccount?.pin === Number(inputLoginPin.value)){

    labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();
    updateUI(currentAccount);
    
  }
});

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 && currentAccount.balance>= amount && receiverAcc && receiverAcc?.username !== currentAccount.username)
  {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }

});

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const loan = Number(inputLoanAmount.value);
  if (loan>0 && currentAccount.movements.some((mov => mov >= amount*0.1))){
    currentAccount.movements.push(loan);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});  

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index,1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent =`Log in to get started`;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// movements.forEach(function(mov,i,arr){
//   arr[3]=777;
//   console.log(i,mov);
// });
// console.log(movements);

//coding challenge 1

// const checkDogs = function(dogsJulia,dogsKate){
//   const juliaCorrected = dogsJulia.slice(1,-2);
 
//   const dogs = juliaCorrected.concat(dogsKate);
//   dogs.forEach(function(value,index){
//     if(value>=5){
//       console.log(`Dog number ${index + 1} is an adult, and is ${value} years old`);
//     } else{
//       console.log(`Dog number ${index + 1} is still a puppy ;`);
//     }
//   });

// }
// checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);


// const withdrawal = movements.filter(mov => mov < 0);
// console.log(withdrawal);

// const calcAverageHumanAge = function(ages){
//   const humanAges = ages.map((age)=>{
//     return age<=2 ? 2 * age : 16 + age * 4;
//   });
//   const over18 = humanAges.filter((age)=>{
//     return age>=18;
//   });
//   const sum = over18.reduce((acc,age)=>{
//     return acc + age;
//   },0)
//   const averageAge = sum/over18.length;
//   console.log(averageAge);
//   return averageAge; 

// }

// const data1= [5,2,4,1,15,8,3];
// calcAverageHumanAge(data1);

// const calcAverageHumanAge = (ages) => { 
//   const averageAge = ages.map( age=> age<=2 ? age*2: 16 + age * 4).filter(adults => adults>=18).reduce((acc,age,i,arr)=> acc + age/arr.length,0);
//   console.log(averageAge);
// }

// const data2= [5,2,4,1,15,8,3];
// calcAverageHumanAge(data2);

// const account = accounts.find(acc => acc.owner === 'Jessica Davisa');
// console.log(account);

// const arr1 = [[1,2],[3,4],5,6];

// const all = arr1.flat();

// console.log(arr1);
// console.log(all);

// const dice = Array.from({length:20} , () => Math.trunc(Math.random() * 6) + 1);
// console.log(dice);

// console.log(document.querySelectorAll('.movements__row'));

// const name = new Map([
//   ['ali','gulzar'],
//   [1,'test']
// ]);
// console.log(Array.from(name));


//coding challenge No. 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//.1
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!"`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too Little!"`);

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const checkEatingDogs = dog => dog.curFood > dog.recommendedFood - dog.recommendedFood * 0.1 && dog.curFood < dog.recommendedFood + dog.recommendedFood * 0.1;

console.log(dogs.some(checkEatingDogs));

console.log(dogs.filter(checkEatingDogs));

const copy = dogs.slice().sort((a,b) => a.recommendedFood - b.recommendedFood);
console.log(copy);
