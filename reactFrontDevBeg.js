let firstName = 'Tahmina';
let lastName = 'Ringer';
let age = prompt("Guess Tahmina's age...");

// Concatination
let oldResult = firstName + ' ' + lastName + ' is ' + age + ' years old';
alert(result);

// Template Literal

let newResult = `${firstName} ${lastName} is ${age} years old`;
alert(result);

// default parameters
function welcome(user = 'Mystery Person', message = 'Good day!') {
  alert(`Hello ${user}, ${message}`);
}
welcome('Tahmina', 'Good morning!');

// Arrow Functions
function greeting(message) {
  return alert(`${message} everyone!`);
}
greeting('Good morning')

//rewrite in arrow fuction

// no arguments
let gretting = () => alert('Hello Everyone');
gretting();

//one argument
let greeting = message => alert(`${message} everyone!`);
greeting('Good morning');

//two arguments
let createBlog = (title, body) => {
  if (!title) {
    throw new Error('A title is required');
  }
  if (!gody) {
     throw new Error("Body can't be empty");
  }
  return alert(`${title} - ${body}`);
}
createBlog('Blog title', 'Blog body');

// Arrow function and this key word
let nepal = {
  mountains: ['Everest', 'Fish Tail', 'Annapurna'],
  printWithDash: function() {
    setTimeout(()  => console.log(this.mountains.join(' - ')), 3000)
  }
};
alert(nepal.mountains);

// Destructuring object
let thingsToDo = {
  morning: 'Excersise',
  afternoon: 'Work',
  evening: 'Code',
  night: ['Sleep', 'Dream']
}

let {morning, afternoon} = thingsToDo;
morning = 'Run';
console.log(morning, ' - ', afternoon);

let uniStudent = ({name, university}) => {
   console.log(`${name} from ${university}`)
}
uniStudent({
  name: 'Tahmina',
  university: 'University of Montana'
});