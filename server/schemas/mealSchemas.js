const mongoose = require('mongoose');


const mealSchema = new mongoose.Schema(
  {
    mealTitle: {
      type: String,
      required: true,
      minLength: 3,
      unique: true
    },
    image: {
      type: String,
      required: true
    },
    ingredients: {
      type: [String],
      required: true
    },
    recipe: {
      type: String,
      required: true,
      minLength: 3,
    }
  }
);


const Meals = mongoose.model('meals', mealSchema);

module.exports = {
  Meals
};