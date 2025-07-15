const mongoose = require('mongoose');



const connectDB = async () => {
  const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bnga9lj.mongodb.net/MarketJangoDB?retryWrites=true&w=majority&appName=Cluster0`

  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
