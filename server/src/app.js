const express = require('express');
const animalsRoutes = require('./routes/animals');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Displays animal json list
app.use('/api/animals', animalsRoutes);

module.exports = app;