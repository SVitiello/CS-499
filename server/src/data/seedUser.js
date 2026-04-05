// Used to create a test user in the database
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const seedUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingUser = await User.findOne({ username: 'testuser' });

    if (existingUser) {
      console.log('Test user already exists:', existingUser._id);
      process.exit();
    }

    const user = await User.create({
      username: 'testuser',
      password: 'password123'
    });

    console.log('Test user created:', user._id);
    process.exit();
  } catch (error) {
    console.error('User seed failed:', error.message);
    process.exit(1);
  }
};

seedUser();