const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoute');

const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// routes 

app.use(`${process.env.PREFIX}/auth`, authRoutes);

module.exports = app;
