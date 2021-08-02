const {gql} = require('apollo-server');

const typeDefs = gql`
	type Meal {
		ingredients: [String],
		_id: ID,
		mealTitle: String,
		recipe: String,
		image: String	
	}

	type Query {
		recipes: [Meal]
	}
`;

module.exports = typeDefs;