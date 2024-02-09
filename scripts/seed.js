const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect('mongodb://127.0.0.1:27017/');
      console.log('db connected');
    }
  } catch (error) {
    console.log(error);
  }
};

async function seedUsers() {
  try {
    await connectDB();
    const user = {
      name: 'Gary',
      email: 'test@test.com',
      password: 'testing',
    };
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    await User.create(user);
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  await seedUsers();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
