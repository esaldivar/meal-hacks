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

   const el = React.useRef(null);
   // Create reference to store the Typed instance itself
     const typed = React.useRef(null);
 
   React.useEffect(() => {
     const options = {
         strings: [
         'Are you hungry?',
         'Not sure what to cook?',
         'Meal hacks has got you covered!'
       ],
       typeSpeed: 50,
       backSpeed: 50,
     };
     
     // elRef refers to the <span> rendered below
     typed.current = new Typed(el.current, options);
     
     return () => {
       // Make sure to destroy Typed instance during cleanup
       // to prevent memory leaks
       typed.current.destroy();
     }
   }, [])

   return (
    <div>
        <div className="aboutBG">
            <div className="funnyText">
                <h1>Meal Hacks</h1>
                <h2 className="typeBox" ref={el}/>
                <div className="innerAbout">
                    <p>goodbye</p>
                </div>
            </div>
        </div>
     </div>
   );
 }
 
 export default About;