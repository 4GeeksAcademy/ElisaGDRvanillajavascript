/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



let who = ['The policeman ', 'A yoga master ', 'A zombie ', 'My mum ', 'The President of the Goverment '];
let action = ['arrested ', 'ate ', 'stole ', 'spiritualized ', 'throw away ', 'painted '];
let what = ['my eyes ', 'to my cat ', 'my South Park movies ', 'my soul ', 'to my sister '];
let when = ['before midnight.', 'right on time.', 'yesterday morning.', 'during my nap time.', 'while I was having a shower.'];


function newExcuse(){
  let resultWho = who[Math.floor(Math.random()* who.length)];
  let resultAction = action[Math.floor(Math.random()* action.length)];
  let resultWhat = what[Math.floor(Math.random()* what.length)];
  let resultWhen = when[Math.floor(Math.random()* when.length)];

  let result = resultWho + resultAction + resultWhat + resultWhen;
 return result;
}

let myExcuse = document.querySelector('.alert');
myExcuse.innerHTML = newExcuse();