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

const Project =
  mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
