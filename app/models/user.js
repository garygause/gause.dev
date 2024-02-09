import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, minLength: 5 },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
