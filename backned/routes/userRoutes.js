// routes/userRoutes.js
const express = require('express');
const auth = require('../middleware/auth'); // Import the auth middleware
const { signUp, signIn } = require('../controller/userController'); // Import controller functions

const router = express.Router();

// Sign up route
router.post('/signup', signUp);

// Sign in route
router.post('/signin', signIn);

// Protected route to get user info
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

module.exports = router;
