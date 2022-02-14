const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  actors: [
    {
      type: String,
    }   
  ]
});

module.exports = mongoose.model('movie', movieSchema);