import mongoose, { Schema } from 'mongoose';

const imageSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
    trim: true,
    minLength: [2, 'Title must be greater than 2 characters.'],
    maxLength: [100, 'Title must be less than 100 characters'],
  },
  credit: {
    type: String,
    trim: true,
  },
  keywords: {
    type: String,
    trim: true,
  },
  alt: {
    type: String,
    required: [true, 'Alt is required.'],
    trim: true,
  },
  path: {
    type: String,
    trim: true,
  },
  width: {
    type: String,
    required: [true, 'Width is required.'],
    trim: true,
  },
  height: {
    type: String,
    required: [true, 'Height is required.'],
    trim: true,
  },
  size: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    required: [true, 'Status is required.'],
    default: 'draft',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const LibraryImage =
  mongoose.models?.LibraryImage || mongoose.model('LibraryImage', imageSchema);

export default LibraryImage;
