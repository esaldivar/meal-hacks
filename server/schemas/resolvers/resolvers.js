const {Meals} = require('../mealSchemas')

const resolvers = {
  Query: {
    recipes:  () => Meals.find({"ingredients":`quinoa`})
}
};


module.exports = resolvers;