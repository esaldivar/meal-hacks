const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 1
    },
    lastName: {
      type: String,
      required: true,
      minLength: 1
    },
    userName: {
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