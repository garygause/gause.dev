'use server';

import mongoose from 'mongoose';
import User from '../models/user';
import Project from '../models/project';

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('db connected');
    }
  } catch (error) {
    console.log(error);
  }
};

export async function getUser(id) {
  await connectDB();
  return await User.findById(id);
}

export async function getUserByEmail(email) {
  try {
    console.log('connecting to db');
    await connectDB();
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    console.log('Failed to get user: ', error);
    throw new Error('Failed to get user.');
  }
}

export async function getUsers() {
  await connectDB();
  return await User.find();
}

export async function getProject(id) {
  await connectDB();
  return await Project.findById(id);
}

export async function getProjects() {
  await connectDB();
  return await Project.find();
}
