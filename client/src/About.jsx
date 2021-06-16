/**
 * 
 */

 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';


 
 const useStyles = makeStyles((theme) => ({
    paper: {
     marginTop: theme.spacing(8),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
 }));
 
 const About = () => {
   const classes = useStyles();
 
   return (
     <div>
         <h1>About</h1>
     </div>
   );
 }
 
 export default About;