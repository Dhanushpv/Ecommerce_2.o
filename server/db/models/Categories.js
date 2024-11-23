const mongoose = require('mongoose');

// Category Schema - Represents main categories like "Eyeglasses", "Sunglasses", etc.
const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  categorySchemaSubcategory: [
    {
      gender: { type: String, required: true },
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      thirdSchemaSubcategory: [
        {
          type: { type: String, required: true },  // For example: 'Material', 'FrameType', etc.
          _id: { type: mongoose.Schema.Types.ObjectId, required: true }
        }
      ]
    }
  ]
});

// Define and export the categories model
const Categories = mongoose.model('Categories', categorySchema);

module.exports = Categories;

