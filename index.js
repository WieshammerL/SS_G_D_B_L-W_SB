// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Test</h1>`;
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(object){
  for(let temp in object){
    return true;
  }
  return false;
}
let a = {};
//a.b = "hallo";
console.log(isEmpty(a));

