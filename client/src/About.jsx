/**
 * 
 */

 import React, { useState, useEffect } from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import Button from '@material-ui/core/Button';
 import {Link} from 'react-router-dom';
 
 const useStyles = makeStyles((theme) => ({
    paper: {
     marginTop: theme.spacing(8),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
   login: {
    color: 'white',
    backgroundColor: '#3F51B5',
    border: "solid white 0.1rem",
    textDecoration: 'none',
    '&:hover':{
      color: '#3F51B5',
      backgroundColor: 'white',
      border: "solid #3F51B5 0.1rem"
    }
  }
 }));
 
 function About() {
   const classes = useStyles();

   const el = React.useRef(null);
   // Create reference to store the Typed instance itself
    const typed = React.useRef(null);
 
   useEffect(() => {
     const options = {
         strings: [
         'Are you hungry?',
         'Not sure what to cook?',
         'Meal hacks has got you covered!'
       ],
       typeSpeed: 50,
       backSpeed: 50,
       showCursor: false
     };
     
     // elRef refers to the <span> rendered below
     typed.current = new Typed(el.current, options);
     
     return () => {
       // Make sure to destroy Typed instance during cleanup
       // to prevent memory leaks
       typed.current.destroy();
     }
   }, [])

   //api request



  const [customer, newCustomers] = useState(null);


   const getMe =() => {
     fetch('/api/customers')
     .then(rawdata => rawdata.json())
      .then(data => newCustomers(data[0]))
   };

  
   //customer does not exist, render without the first name which should be john
   

   return (
    <div>
        <div className="aboutBG">
            <div className="funnyText">
                <h1>Meal Hacks</h1>
                <h2 className="typeBox" ref={el}/>
                <h2 className="aboutHow">How it works</h2>
                <div className="innerAbout">
                    <div className="innerCol choose"></div>
                        <div className="innerCol">
                            <h2>1. Choose Your Ingredients</h2>
                            <p>Choose your protein, vegetables, grains, and optionally fruit.</p>
                            <Link className="aboutButton" to={{
    pathname: "/Recipe"
  }}>
           <Button color="inherit" className={classes.login}>Get Started</Button>
          </Link>
                    </div>    
                </div>
                <div className="innerAbout">
                        <div className="innerCol"> 
                            <h2>2. Find a recipe</h2>
                            <p>Once we have your ingredients we will match you with one of our recipes.</p>
                            <Link className="aboutButton" to={{
    pathname: "/Login"
  }}>
           <Button color="inherit" className={classes.login}>Get Started</Button>
          </Link>
                        </div>
                    <div className="innerCol recipe"></div>
                </div>
                <div className="innerAbout">
                    <div className="innerCol favorites"></div>
                        <div className="innerCol">
                            <h2>3. Save your favorites</h2>
                            <p>Don't ever worry about where to go for that best recipe again. We will keep it safe for you.  When you are hungry, come back and cook!</p>
                            <Link className="aboutButton" to={{
    pathname: "/Login"
  }}>
           <Button color="inherit" className={classes.login}>Get Started</Button>
          </Link>
                        </div>
                </div>
            </div>
        </div>
     </div>
   );

 }
 
 export default About;