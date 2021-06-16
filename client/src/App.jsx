import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'
import Login from './Login'


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
      <Login />
    </div>
  );
}

export default App;