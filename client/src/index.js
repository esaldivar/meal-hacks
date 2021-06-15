/**
 * 
 */

import React, { Component} from 'react';
import { render } from 'react-dom'
import NavBar from './NavBar'
import Login from './Login'
import './style.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true
    };
  }
  render(){
    return(
      <div className ="main-page">
        <NavBar/>

        <button>Click me. DO IT!</button>
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'));
