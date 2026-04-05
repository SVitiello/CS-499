const Favorite = require('../models/Favorite');

// Adds an animal to a user's favorites if not already favorited
const addFavorite = async (req, res) => {
  try {
    const { userId, animalId } = req.body;

    const existingFavorite = await Favorite.findOne({ userId, animalId });

    if (existingFavorite) {
      return res.status(400).json({ message: 'Animal already favorited' });
    }

    const favorite = await Favorite.create({
      userId,
      animalId
    });

    res.status(201).json({
      message: 'Favorite added successfully',
      favorite
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to add favorite',
      error: error.message
    });
  }
};

// Gets a list of favorite animals for a user
const getFavoritesByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const favorites = await Favorite.find({ userId }).populate('animalId');

    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve favorites',
      error: error.message
    });
  }
};


module.exports = {
  addFavorite,
  getFavoritesByUser
};