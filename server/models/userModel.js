const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 1
    },
    LastName: {
      type: String,
      required: true,
      minLength: 1
    },
    user: {
      type: String,
      required: true,
      minLength: 3,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minLength: 4,
    },
  }
);


const User = mongoose.model('users', userSchema);

module.exports = {
  User
};