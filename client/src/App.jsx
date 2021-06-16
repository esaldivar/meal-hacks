import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './Signup'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar/>
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;