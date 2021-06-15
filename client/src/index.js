// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import _ from 'lodash';
import './style.css';
import Icon from '../assets/logo.png';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button'); 
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['goodbye', 'webpack'], ' ');
  element.classList.add('hello');

   // testing a button
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
   
  
  
  return element;
}

document.body.appendChild(component());
