'use strict';

// const Person = function (name,birthyear){
//   this.name=name;
//   this.birthyear=birthyear;
// }

// const ali = new Person('ali',1992);
// console.log(ali,Person);
// console.log(Person.prototype);

// const a = {
//   ali:'ali',
//   name:'aaa'
// }

// console.dir(Person);



// const Car = function(make,speed){
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function(){
//   this.speed+=10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// }
// Car.prototype.brake = function(){
//   this.speed-=5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// }
// const Car1 = new Car('BMW',120);
// const Car2 = new Car('Mercedes',95);
// Car1.accelerate();


// const EV = function(make,speed,charge){
//   Car.call(this,make, speed);
//   this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo;
// }

// EV.prototype.accelerate = function(){
//   this.speed+=20;
//   this.charge--;
//   console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// }

// const Ecar1 = new EV('Tesla',120,23);
// Ecar1.brake();
// Ecar1.chargeBattery(71);
// Ecar1.accelerate();



class CarCl {
  constructor(make,speed){
    this.make = make;
    this.speed = speed
  }

  accelerate(){
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  brake(){
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS(){
    return `${this.make} is going at ${this.speed/1.6} mi/h`;
  }
  set speedUS(speed){
    this.speed = speed * 1.6; 
  }
}

const car1Cl = new CarCl('ford',120);
car1Cl.accelerate();
console.log(car1Cl.speedUS);

class EVCL extends CarCl {
  #charge;
  constructor(make,speed,charge){
    super(make,speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo){
    this.#charge = chargeTo;
    return this;
  }
  accelerate(){
    this.speed+=20;
    this.#charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

const ev = new EVCL('mercedes',100,40);
ev.accelerate().chargeBattery(60).brake();







