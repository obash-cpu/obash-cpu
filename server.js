const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// MongoDB connection URI and database name
const uri = 'mongodb://localhost:27017';
const dbName = 'usersdb';

// Function to hash the user's password
async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

// Create a new user
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);

    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ email: email });
    if (existingUser) {
      res.status(409).json({ message: 'User already exists' });
    } else {
      // Hash the user's password
      const hashedPassword = await hashPassword(password);

      // Insert the new user into the database
      await db.collection('users').insertOne({ username: username, email: email, password: hashedPassword });
      res.status(201).json({ message: 'User registered successfully' });
    }

    // Close the MongoDB connection
    client.close();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);

    // Find the user by email
    const user = await db.collection('users').findOne({ email: email });

    if (user) {
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }

    // Close the MongoDB connection
    client.close();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
