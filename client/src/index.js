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


function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['goodbye', 'webpack'], ' ');
  element.classList.add('hello');
  
  return element;
}

document.body.appendChild(component());
