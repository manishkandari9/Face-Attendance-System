// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the DB connection function
const userRoutes = require('./routes/userRoutes'); // Import user routes
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // Call the DB connection function

// Use user routes
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
