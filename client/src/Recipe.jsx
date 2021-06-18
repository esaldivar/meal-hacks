import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  

const Recipe = () => {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <div className="apple">
            <div>
            <div>
                <h1 >Choose Your Ingredients</h1>
            </div>
            <div>
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
        <div>
            <h2 >Vegetables</h2>
        </div>
        <div>
            <h2>Grains</h2>
        </div>
    </div>     
</div>
    
)
}
 
export default Recipe;