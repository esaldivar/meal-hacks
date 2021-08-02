const { Meals } = require('../../schemas/mealSchemas');

/**
 * @author Eric Saldivar
 * @params req.body.data receives username and password from client
 * @description middleware that creates new user in database using bycrpt to hash password
 */


const findRecipe = async (req, res, next) => {
  try {
	const ingredient = req.query.ingredients;
    const getRecipes = await Meals.find({"ingredients":`${ingredient}`});
    res.recipes = getRecipes;
    return next();
  } catch(err) {
    console.log('recipe error', err);
    return res.status(500).json({message: 'Failed to find recipe!'});
  }
}
  
  
module.exports = findRecipe;