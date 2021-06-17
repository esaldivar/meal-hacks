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
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  about: {
    color: 'white',
    textDecoration: 'none',
    '&:hover':{
      color: '#3F51B5',
      backgroundColor: 'white',
      border: "solid #3F51B5 0.1rem",
      borderRadius: '5px'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  login: {
    color: 'white',
    border: "solid white 0.1rem",
    '&:hover':{
      color: '#3F51B5',
      backgroundColor: 'white',
      border: "solid #3F51B5 0.1rem"
    }
  },
  loginLink: {
    textDecoration: 'none'
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
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar className="icon" alt="Meal Hacks Icon" src="./logo.png" />
          </IconButton>
          <Link className={classes.about} to={{
    pathname: "/"
  }}>
             <Button color="inherit">About Us</Button>
          </Link>
          <Typography variant="h6" className={classes.title}>
             
              <Button color="inherit">Find a Recipe</Button>
            </Typography>
          <Link className={classes.loginLink} to={{
    pathname: "/Login"
  }}>
           <Button color="inherit" className={classes.login}><VpnKeyIcon className={classes.keys} />Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
