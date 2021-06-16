/**
 * 
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './Signup'
import About from './About'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
      <NavBar/>
        <Switch>
            <Route path="/Login" exact component={Login} /> 
            <Route path="/Signup" exact component={SignUp} />
            <Route path="/" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;