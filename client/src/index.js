/**
 * 
 */

import React, { Component} from 'react';
import { render } from 'react-dom'
import App from './App'

import './style.css'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true
    };
  }
  render(){
    return(
      <div className ="main-page">
        <App/>
      </div>
    )
  }
}

render(<Main />, document.querySelector('#root'));
