import mongoose, { Schema } from 'mongoose';

const portfolioSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
    trim: true,
    minLength: [2, 'Title must be greater than 2 characters.'],
    maxLength: [100, 'Title must be less than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Portfolio =
  mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
