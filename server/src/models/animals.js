const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    animalType: {
      type: String,
      required: true,
      trim: true
    },
    gender: {
      type: String,
      trim: true
    },
    age: {
      type: Number,
      required: true
    },
    weight: {
      type: Number
    },
    acquisitionDate: {
      type: Date
    },
    acquisitionCountry: {
      type: String,
      trim: true
    },
    trainingStatus: {
      type: String,
      trim: true
    },
    reserved: {
      type: Boolean,
      default: false
    },
    inServiceCountry: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Animal', animalSchema);