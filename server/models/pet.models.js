const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      "Pet Name is Required"
    ],
    minLength: [
      3,
      "Pet name must be at least 3 characters long"
    ]
  },
  type: {
    type: String,
    required: [
      true,
      "Pet Type is Required"
    ],
    minLength: [
      3,
      "Pet Type must be at least 3 characters long"
    ]
  },
  description: {
    type: String,
    required: [
      true,
      "Pet Description is Required"
    ],
    minLength: [
      3,
      "Pet Description must be at least 3 characters long"
    ]
  },
  skillOne: { type: String },
  skillTwo: { type: String },
  skillThree: { type: String },
  likes: { type: Number }
}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema)