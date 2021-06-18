import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



  
  const useStyles = makeStyles((theme) => ({
    paper: {
     marginTop: theme.spacing(8),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
   login: {
    color: 'white',
    width: '10%',
    fontSize: '1rem',
    backgroundColor: '#3F51B5',
    border: "solid white 0.1rem",
    textDecoration: 'none',
    marginTop: '20px',
    '&:hover':{
      color: '#3F51B5',
      backgroundColor: 'white',
      border: "solid #3F51B5 0.1rem"
    }
  }
 }));

   
const Recipe = () => {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedI: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const classes = useStyles();

    return (
<div className="apple">
<div> 
<div>
                <h1 >Choose Your Ingredients</h1>
            </div>
    <div className="recipeCols">
            
            <div className="recipeBoxes">
                <h2 >Protein</h2>
                <FormGroup column>
                <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="Chicken"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Beef"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
        }
        label="Fish"
      />
      
    </FormGroup>
        </div>
        <div className="recipeBoxes">
            <h2 >Vegetables</h2>
            <FormGroup column>
                <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
          />
        }
        label="Spinach"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedE}
            onChange={handleChange}
            name="checkedE"
            color="primary"
          />
        }
        label="Tomato"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            color="primary"
          />
        }
        label="Potato"
      />
      
    </FormGroup>
        </div>
        <div className="recipeBoxes">
            <h2>Grains</h2>
            <FormGroup column>
                <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
            color="primary"
          />
        }
        label="Rice"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedH}
            onChange={handleChange}
            name="checkedH"
            color="primary"
          />
        }
        label="Quinoa"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedI}
            onChange={handleChange}
            name="checkedI"
            color="primary"
          />
        }
        label="Pasta"
      />
      
    </FormGroup>
        </div>
        
        </div>
        <Button color="inherit" className={classes.login}>Let's Cook!</Button>
    </div>    
</div>
    
)
}
 
export default Recipe;