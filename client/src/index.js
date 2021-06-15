import React, { Component} from 'react';
import { render } from 'react-dom'
import Banana from './Banana'
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
        <button>Click me. DO IT!</button>
        <Banana/>
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'));
