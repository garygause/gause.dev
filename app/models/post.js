import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
    trim: true,
    minLength: [2, 'Title must be greater than 2 characters.'],
    maxLength: [100, 'Title must be less than 100 characters'],
  },
  author: {
    type: String,
    trim: true,
  },
  keywords: {
    type: String,
    trim: true,
  },
  summary: {
    type: String,
    required: [true, 'Summary is required.'],
    maxLength: [200, 'Summary must be less than 200 characters'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Content is required.'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Slug is required.'],
    trim: true,
  },
  libraryImage: {
    type: String,
    trim: true,
  },
  libraryImageData: {
    type: Object,
    trim: true,
  },
  featured: {
    type: String,
  },
  status: {
    type: String,
    required: [true, 'Published is required.'],
    default: 'draft',
  },
  shares: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);

export default Post;
