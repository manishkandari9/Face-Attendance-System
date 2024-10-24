// models/User.js
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
