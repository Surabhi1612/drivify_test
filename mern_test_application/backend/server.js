const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const testRoutes = require('./routes/testRoutes'); // Import your router

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tests', testRoutes);

// MongoDB connection
mongoose
  .connect('mongodb://127.0.0.1:27017/mern_test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
