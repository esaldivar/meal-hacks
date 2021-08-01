/**
 * 
 */

 import React from 'react';
 import axios from 'axios';
 import Avatar from '@material-ui/core/Avatar';
 import Button from '@material-ui/core/Button';
 import CssBaseline from '@material-ui/core/CssBaseline';
 import TextField from '@material-ui/core/TextField';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import Checkbox from '@material-ui/core/Checkbox';
 import Grid from '@material-ui/core/Grid';
 import Box from '@material-ui/core/Box';
 import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
 import Typography from '@material-ui/core/Typography';
 import { makeStyles } from '@material-ui/core/styles';
 import Container from '@material-ui/core/Container';
 import {Link} from 'react-router-dom';

 
 const useStyles = makeStyles((theme) => ({
    paper: {
     marginTop: theme.spacing(8),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
   avatar: {
     margin: theme.spacing(1),
     backgroundColor: '#3F51B5',
   },
   form: {
     width: '100%', // Fix IE 11 issue.
     marginTop: theme.spacing(3),
   },
   submit: {
     margin: theme.spacing(3, 0, 2),
   },
   image: {
    backgroundImage: 'url(../logo.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
 }));
 
 const SignUp = () => {
   const classes = useStyles();

   //state for registering user name
    const [firstName, setfirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [registerUser, setRegisterUser] = React.useState('')
    const [registerPassword, setRegisterPassword] = React.useState('')

    const register = (e) => {
      e.preventDefault();
      axios.post("/api/register", {
       data: {
         firstName: firstName,
         lastName: lastName,
         userName: registerUser,
         password: registerPassword,
       },
     })
     .then((res) => {
       console.log(res.data);
     })
     .catch((err) => console.log(err));
    }

   return (
     <Container component="main" maxWidth="xs">
       <CssBaseline />
       <div className={classes.paper}>
         <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
           Sign up
         </Typography>
         <form className={classes.form} noValidate>
           <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
               <TextField
                 autoComplete="fname"
                 name="firstName"
                 variant="outlined"
                 required
                 fullWidth
                 id="firstName"
                 label="First Name"
                 autoFocus
                 onChange={(e) => setfirstName(e.target.value)}
               />
             </Grid>
             <Grid item xs={12} sm={6}>
               <TextField
                 variant="outlined"
                 required
                 fullWidth
                 id="lastName"
                 label="Last Name"
                 name="lastName"
                 autoComplete="lname"
                 onChange={(e) => setLastName(e.target.value)}
               />
             </Grid>
             <Grid item xs={12}>
               <TextField
                 variant="outlined"
                 required
                 fullWidth
                 id="userName"
                 label="User Name"
                 name="User Name"
                 autoComplete="uname"
                 onChange={(e) => setRegisterUser(e.target.value)}
               />
             </Grid>
             <Grid item xs={12}>
               <TextField
                 variant="outlined"
                 required
                 fullWidth
                 name="password"
                 label="Password"
                 type="password"
                 id="password"
                 autoComplete="current-password"
                 onChange={(e) => setRegisterPassword(e.target.value)}
               />
             </Grid>
           </Grid>
           <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
             onClick={register}
           >
             Sign Up
           </Button>
           <Grid container justifyContent="flex-end">
             <Grid item>
               <Link to={{
    pathname: "/Login"
  }}href="#" variant="body2">
                 Already have an account? Sign in
               </Link>
             </Grid>
           </Grid>
         </form>
       </div>
     </Container>
   );
 }
 
 export default SignUp;