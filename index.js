// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Test</h1>`;
/*
//Aufgabe 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/

/*
//Aufgabe 2
function isEmpty(object){
  for(let temp in object){
    return false;
  }
  return true;
}
let a = {};
//a.b = "hallo";
console.log(isEmpty(a));
*/

/*
//Aufgabe 3
const x = {
name: "John"
};
x.name = "Pete";
console.log(x.name);
*/

/*
//Aufgabe 4
let salaries = {
  John: 100,
  Pete: 160,
  Ann: 130,
  Sepp: 80,
  Ralph: -10
};

function getSum(object){
  let sum = 0;
  for(let key in object){
      sum = sum + object[key];
  }
  return sum;
}

console.log(getSum(salaries));
*/


/*
//Aufgabe 4
let temp = {
  a: 100,
  b: 160,
  c: "Hallo"
};

function multiplyNumeric(object){
  for(let key in object){
      if(typeof object[key] == 'number'){
        object[key] *= 2;
      }
  }
}

multiplyNumeric(temp);
console.log(temp);
*/

