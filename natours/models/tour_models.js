const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tour requires a name"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "Price required for a tour"],
  },
  duration: {
    type: Number,
    required: [true, "A tours must have a duration"],
  },
  maxGroupSize: {
    type: Number,
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have difficulty"],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  ratingsAverage: {
    type: Number,
    default: 0,
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, "A tour must have a summary"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have a cover image"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
