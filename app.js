//The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
/* const myPromise = Promise.resolve('Foo');
myPromise.then((res) => console.log(res)); */
// BT: 'Not helpful - just shows you how they work'

const btone = document.querySelector(".hover");
const promOne = "I promise to change.";
const promTwo = "I promise to develop.";
const promThree = "I promise ..";
const btall = document.querySelector(".wpage")
const btxypos = document.querySelector(".btxy");

btone.addEventListener("mousemove", EventLife);
btall.addEventListener("mousemove", EventLife);

function EventLife(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  btxypos.innerHTML = `MouseX: <span>${e.offsetX}</span> MouseY: <span>${e.offsetY}</span>`;
}
function Hchange() {
  const btmine = document.getElementById("btmine");
  if (btmine.innerHTML === promOne) {
    btmine.innerHTML = promTwo;
  } else if (btmine.innerHTML === promTwo) {
    btmine.innerHTML = promThree;
  } else {
    btmine.innerHTML = promOne;
  }
}

window.setTimeout(headerC, 3000);
const h1 = document.createElement('h1');
h1.id = 'header-one';
h1.setAttribute('title', 'Dyno Header');
h1.appendChild(document.createTextNode('From scratch with vanilla JS!'));

//console.log(h1);

function headerC (ht1n) {
  // Append h1 to existing div
    document.querySelector('div.container').appendChild(h1);
}

// Isolate classes 
const classNum = document.getElementsByClassName('container');

//console.log(classNum[0]);
classNum[0].style.background = '#555555';

const tagNum = document.getElementsByTagName('div');
console.log(tagNum);
tagNum[1].style.background = '#434343';





/* const myPromise = new Promise( function Results(resolve, reject){

  setTimeout(() => resolve(4), 2000);
});

myPromise.then((res) => {
    res += 3;
    console.log(res);
}); */

/*
XMLHttpRequest (XHR) is a JavaScript API to create AJAX requests. Its methods provide the ability to send network requests between the browser and a server.
*/
const n = 8;
const a = 9;


function aValue () {
  return n * a;
}
console.log(aValue());

 function getData(method, url) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
  let todos = JSON.parse(data);
  let output = '';
  for(let todo of todos){
    output += `
      <li>
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed}</p>
      </li>
    `;
  }

  document.getElementById('template').innerHTML = output;
}).catch(function(err){
  console.log(err);
}); 

setTimeout(() => console.log('It waited seven seconds'), 7000);