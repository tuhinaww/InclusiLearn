const express = require('express');
const app = express();

const port = 5000;
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Navigation

app.get('/', (req, res) => {
    res.send('welcome');
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})