import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full Name is required.'],
    trim: true,
    minLength: [2, 'Full Name must be greater than 2 characters.'],
    maxLength: [100, 'Full Name must be less than 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    trim: true,
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, 'Invalid email address.'],
  },
  message: {
    type: String,
    required: [true, 'Message is required.'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
