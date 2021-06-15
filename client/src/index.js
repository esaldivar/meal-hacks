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

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['goodbye', 'webpack'], ' ');
  element.classList.add('hello');

   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;
 
   element.appendChild(myIcon);
  
  return element;
}

document.body.appendChild(component());
