// let firstName = 'Tahmina';
// let lastName = 'Ringer';
// let age = prompt("Guess Tahmina's age...");

// // Concatination
// let oldResult = firstName + ' ' + lastName + ' is ' + age + ' years old';
// alert(result);

// // Template Literal

// let newResult = `${firstName} ${lastName} is ${age} years old`;
// alert(result);

// // default parameters
// function welcome(user = 'Mystery Person', message = 'Good day!') {
//   alert(`Hello ${user}, ${message}`);
// }
// welcome('Tahmina', 'Good morning!');

// // Arrow Functions
// function greeting(message) {
//   return alert(`${message} everyone!`);
// }
// greeting('Good morning')

// //rewrite in arrow fuction

// // no arguments
// let gretting = () => alert('Hello Everyone');
// gretting();

// //one argument
// let greeting = message => alert(`${message} everyone!`);
// greeting('Good morning');

// //two arguments
// let createBlog = (title, body) => {
//   if (!title) {
//     throw new Error('A title is required');
//   }
//   if (!gody) {
//      throw new Error("Body can't be empty");
//   }
//   return alert(`${title} - ${body}`);
// }
// createBlog('Blog title', 'Blog body');

// // Arrow function and this key word
// let nepal = {
//   mountains: ['Everest', 'Fish Tail', 'Annapurna'],
//   printWithDash: function() {
//     setTimeout(()  => console.log(this.mountains.join(' - ')), 3000)
//   }
// };
// alert(nepal.mountains);

// // Destructuring object
// let thingsToDo = {
//   morning: 'Excersise',
//   afternoon: 'Work',
//   evening: 'Code',
//   night: ['Sleep', 'Dream']
// }

// let {morning, afternoon} = thingsToDo;
// morning = 'Run';
// console.log(morning, ' - ', afternoon);

// let uniStudent = ({name, university}) => {
//    console.log(`${name} from ${university}`)
// }
// uniStudent({
//   name: 'Tahmina',
//   university: 'University of Montana'
// });

// // array destructuring
// let [, ,firstMountain] = ['Everest', 'Fish Tail', Annapurna];
// console.log(firstName)

// //Restructure Array
// var name = 'Everest';
// var height = 8848;
// var output = function () {
//   console.log(`Mt. ${this.name} is ${this.height} meter tall`);
// }

// var adventureClibing = { name, height, output };
// adventureClibing.output();

// //rewrite
// var adventureClibing = {
//   name: 'Everest',
//   height: 8848,
//   output() {
//     console.log(`Mt. ${this.name} is ${this.height} meter tall`);
//   }
// };
// adventureClibing.output();

// //spread and rest opperators
// var mountains = ['Everest', 'Fish Tail', 'Annapurna'];
// var mountainsFromJapan = ['Fugi'];

// var allMountains = [...mountains, ...mountainsFromJapan];
// console.log(allMountains);

// var day = {
//   breakfast: 'toast',
//   lunch: 'salad',
// }

// var night = {
//   dinner: 'soup'
// }

// var picnic = {...day, ...night};
// console.log(picnic);

// // rest
// var rivers = ['Sunkoshi', 'Tamakoshhi', 'Saptokoshi'];
// var[first, ...rest] = rivers;
// console.log(first);
// console.log(rest);

// //Class constructor Super
// function Holiday(destination, days) {
//   this.destination = destination;
//   this.days = days;
// }

// Holiday.prototype.info = function() {
//   console.log(this.destination + " | " + this.days + " days");
// }

// var nepal = new Holiday('Nepal', 30);
// console.log(nepal.info());

// //ES6
// class Holiday {
//   constructor(destination, days) {
//     this.destination = destination;
//     this.days = days;
//   }
//   info() {
//     console.log(`${this.destination} will take ${this.days} days.`)
//   }
// }

// const trip = new Holiday('Kathmandu, Nepal', 30)
// console.log(trip.info());

// //Extend
// //parent class ---- Super Class
// class Holiday {
//   constructor(destination, days) {
//     this.destination = destination;
//     this.days = days;
//   }
//   info() {
//     console.log(`${this.destination} will take ${this.days} days.`)
//   }
// }

// //Sub Class
// class Expedition extends Holiday {
//   constructor(destination, days, gear) {
//     super(destination, days);
//     this.gear = gear;
//   }
//   info(){
//     super.info();
//     console.log(`Bring your ${this.gear.join(' and your')}`);
//   }
// }
// const tripWithGear = new Expedition('Everest', 30, ['Sunglasses', 'Flags', 'Camera']);
// tripWithGear.info();