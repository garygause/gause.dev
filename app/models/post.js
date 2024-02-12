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
  content: {
    type: String,
    required: [true, 'Content is required.'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);

export default Post;
