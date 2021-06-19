/**
 * 
 */

 import React from 'react';
 import Avatar from '@material-ui/core/Avatar';
 import Button from '@material-ui/core/Button';
 import CssBaseline from '@material-ui/core/CssBaseline';
 import TextField from '@material-ui/core/TextField';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import Checkbox from '@material-ui/core/Checkbox';
 import Paper from '@material-ui/core/Paper';
 import Box from '@material-ui/core/Box';
 import Grid from '@material-ui/core/Grid';
 import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
 import Typography from '@material-ui/core/Typography';
 import { makeStyles } from '@material-ui/core/styles';
 import {Link} from 'react-router-dom';
 
 
 
 const useStyles = makeStyles((theme) => ({
   root: {
     height: '100vh',
   },
   image: {
     backgroundImage: 'url(https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)',
     backgroundRepeat: 'no-repeat',
     backgroundColor:
       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
     backgroundSize: 'cover',
     backgroundPosition: 'center',
   },
   paper: {
     margin: theme.spacing(8, 4),
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
     marginTop: theme.spacing(1),
   },
   submit: {
     margin: theme.spacing(3, 0, 2)
   },
 }));
 
const Login = () => {
   const classes = useStyles();

   const [loginUsername, setLoginUsername] = useState('')
   const [loginPassword, setLoginPassword] = useState('')
 
   return (
     <Grid container component="main" className={classes.root}>
       <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
         <div className={classes.paper}>
           <Avatar className={classes.avatar}>
             <LockOutlinedIcon />
           </Avatar>
           <Typography component="h1" variant="h5">
             Sign in
           </Typography>
           <form className={classes.form} noValidate>
             <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="userName"
               label="User Name"
               name="username"
               autoComplete="username"
               autoFocus
             />
             <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
             />
             <FormControlLabel
               control={<Checkbox value="remember" color="primary" />}
               label="Remember me"
             />
             <Button
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
               
             >
               Sign In
             </Button>
             <Grid container>
               <Grid item xs>
                 <Link href="#" variant="body2">
                   Forgot password?
                 </Link>
               </Grid>
               <Grid item>
                 <Link to={{
    pathname: "/Signup"
  }}>
                   {"Don't have an account? Sign Up"}
                 </Link>
               </Grid>
             </Grid>
             <Box mt={5}>
               
             </Box>
           </form>
         </div>
       </Grid>
     </Grid>
   );
 }
 
 export default Login;
 