const bcrypt = require('bcrypt');
const { User } = require('../../schemas/userSchema');
const { Meals } = require('../../schemas/mealSchemas');

/**
 * @author Eric Saldivar
 * @params req.body.data receives username and password from client
 * @description middleware that creates new user in database using bycrpt to hash password
 */


const register = async (req, res, next) => {
  try {

    const saltRounds = 10;
    const {firstName, lastName, userName, password} = req.body.data;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      'firstName': firstName, 
      'lastName': lastName,
      'userName': userName, 
      'password': hashedPassword
    });
    return next();
  } catch(err) {
    console.log('signUp error', err);
    return res.status(500).json({message: 'Failed to create user'});
  }
}


module.exports = register;