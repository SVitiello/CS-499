const express = require('express');
const animalsRoutes = require('./routes/animals');
const reservationsRoutes = require('./routes/reservations');
const favoritesRoutes = require('./routes/favorites');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Displays animal json list
app.use('/api/animals', animalsRoutes);

// reservation json list
app.use('/api/reservations', reservationsRoutes);

// favorites json list
app.use('/api/favorites', favoritesRoutes);

// User authentication
app.use('/api/auth', authRoutes);

module.exports = app;