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
    width: '15%',
    fontSize: '1.5rem',
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
        chicken: false,
        beef: false,
        fish: false,
        spinach: false,
        tomato: false,
        potato: false,
        rice: false,
        quinoa: false,
        pasta: false,
      });
      //create a piece of state with a hook --push this input an empty object
      //object.chicken = chicken
      
      let recipeInsert = '';

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        for(const key in state){
            if(recipeInsert.length === 0 && state[key] === true){
            recipeInsert += key;
        } else if (state[key] === true && !recipeInsert.includes(key)){
            recipeInsert += `%2C${key}`;
        }
        };
        console.log(recipeInsert)
    }
      
      const classes = useStyles();

      async function getRecipe (){
        await fetch('/api/recipes');
      } 

     
      

//       const getRecipe = () =>{fetch(`https://themealdb.p.rapidapi.com/filter.php?i=${recipeInsert}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "e1ecfbe769mshb2765a17ab15013p158e5fjsn5193e7a6908c",
// 		"x-rapidapi-host": "themealdb.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// }

    return (
<div className="apple">
<div> 
    <div className="recipeCols">
        <div>
        <h1 >Choose Your Ingredients</h1>
        <img className="logo" src="./mh.png"></img>
        </div>
        <div className="recipeBoxes">
        <h2 >Protein</h2>
            <FormGroup row>
                <FormControlLabel
            control={
            <Checkbox
                checked={state.chicken}
                onChange={handleChange}
                name="chicken"
                color="primary"
            />
            }
            label="chicken"
        />
                <FormControlLabel
            control={
            <Checkbox
                checked={state.beef}
                onChange={handleChange}
                name="beef"
                color="primary"
            />
            }
            label="beef"
        />
                <FormControlLabel
            control={
            <Checkbox
                checked={state.fish}
                onChange={handleChange}
                name="fish"
                color="primary"
            />
            }
            label="fish"
        />
            </FormGroup>  
        </div>
        <div className="recipeBoxes">
            <h2 >Vegetables</h2>
            <FormGroup row>
                <FormControlLabel
        control={
          <Checkbox
            checked={state.spinach}
            onChange={handleChange}
            name="spinach"
            color="primary"
          />
        }
        label="spinach"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.tomato}
            onChange={handleChange}
            name="tomato"
            color="primary"
          />
        }
        label="tomato"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.potato}
            onChange={handleChange}
            name="potato"
            color="primary"
          />
        }
        label="potato"
      />
      
    </FormGroup>
        </div>
        <div className="recipeBoxes">
            <h2>Grains</h2>
            <FormGroup row>
                <FormControlLabel
        control={
          <Checkbox
            checked={state.rice}
            onChange={handleChange}
            name="rice"
            color="primary"
          />
        }
        label="rice"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.quinoa}
            onChange={handleChange}
            name="quinoa"
            color="primary"
          />
        }
        label="quinoa"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.pasta}
            onChange={handleChange}
            name="pasta"
            color="primary"
          />
        }
        label="pasta"
      />
      
    </FormGroup>
        </div>
        
        </div>
        <Button color="inherit" className={classes.login} onClick={getRecipe}>Let's Cook!</Button>
    </div>    
</div>
    
)
}

export default Recipe;