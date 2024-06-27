// // models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   username: { type: String, required: true, unique: true }, // Ensure username is required and unique

// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  companyName: { type: String },
  position: { type: String },
  bio: { type: String },
  communicationPreferences: { type: String },
  workspacePreferences: { type: String },
  profilePicture: { type: String }, // URL of the profile picture
});

const User = mongoose.model('User', userSchema);

module.exports = User;
