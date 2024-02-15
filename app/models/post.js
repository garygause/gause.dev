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
    required: [true, 'Author is required.'],
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

const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);

export default Post;
