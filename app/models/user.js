import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: string, require: true },
  email: { type: string, require: true, unique: true },
  password: { type: string, require: true, minLength: 5 },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
