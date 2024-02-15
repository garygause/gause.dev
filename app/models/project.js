import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
    trim: true,
    minLength: [2, 'Title must be greater than 2 characters.'],
    maxLength: [100, 'Title must be less than 100 characters'],
  },
  stack: {
    type: String,
    required: [true, 'Stack is required.'],
    trim: true,
    minLength: [2, 'Stack must be greater than 2 characters.'],
    maxLength: [500, 'Stack must be less than 500 characters'],
  },
  imageSrc: {
    type: String,
    required: [true, 'Image Src is required.'],
    trim: true,
  },
  imageWidth: {
    type: String,
    required: [true, 'Image Width is required.'],
    trim: true,
  },
  imageHeight: {
    type: String,
    required: [true, 'Image Height is required.'],
    trim: true,
  },
  imageAlt: {
    type: String,
    required: [true, 'Image Alt is required.'],
    trim: true,
  },
  keywords: {
    type: String,
    trim: true,
  },
  summary: {
    type: String,
    required: [true, 'Summary is required.'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Slug is required.'],
    trim: true,
  },
  featured: {
    type: String,
    default: false,
  },
  status: {
    type: String,
    required: [true, 'Published is required.'],
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Project =
  mongoose.models?.Project || mongoose.model('Project', projectSchema);

export default Project;
