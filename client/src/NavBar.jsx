/**
 * 
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  login: {
    border: "solid white 0.1rem",
    '&:hover':{
      color: 'blue',
      backgroundColor: 'white',
      border: "solid #3F51B5 0.1rem"
    }
  },
  keys: {
    color: 'white',
    margin: '0 5px 0 0',
    '&:hover':{
      color: '#3F51B5'
    }
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Avatar alt="Meal Hacks Icon" src="./logo.png" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit">Meal Hacks</Button>
          <Button color="inherit">Find a Recipe</Button>
          </Typography>
          <Button color="inherit" className={classes.login}><VpnKeyIcon className={classes.keys}/>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
