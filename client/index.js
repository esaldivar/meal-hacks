/**
 * 
 */

import React, { Component} from 'react';
import { render } from 'react-dom'
import App from './components/App'
import './style.css'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  
  render(){
    const customers = this.state.customers;
    return(
      <div className ="main-page">
        <App />
      </div>
    )
  }
}

render(<Main />, document.querySelector('#root'));
