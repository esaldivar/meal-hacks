import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ConcatenationScope } from 'webpack';


  
  const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: '#3F51B5',
        color: 'white',
        margin: '0 auto',
        marginTop: '25px'
      },
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
  },
  media: {
    color: "white",
    margin: '0 10px',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    color: 'white',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  text: {
      color: 'white'
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

      const [expanded, setExpanded] = React.useState(false);

      const handleExpandClick = () => {
        setExpanded(!expanded);
      };

     
      

      const getRecipe = () =>{fetch(`https://themealdb.p.rapidapi.com/filter.php?i=${recipeInsert}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e1ecfbe769mshb2765a17ab15013p158e5fjsn5193e7a6908c",
		"x-rapidapi-host": "themealdb.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

}

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
    <Card className={classes.root}>
      <CardHeader

        action={
          <IconButton aria-label="settings">
            <MoreVertIcon className={classes.text}/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1602755088318-39b7a7e6482a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
        title="Paella dish"
      />
      <CardContent className={classes.text}>
        <Typography variant="body2" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={classes.text} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>    
</div>
    
)
}

export default Recipe;