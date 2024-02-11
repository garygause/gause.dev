'use server';

import mongoose from 'mongoose';

import { User, Project, Contact } from '@/app/models';
import { DatabaseError } from './exceptions';

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      const uri = process.env.MONGODB_URI + process.env.MONGODB_DB;
      await mongoose.connect(uri);
      console.log('db connected: ' + uri);
    }
  } catch (error) {
    console.log(error);
    throw new DatabaseError('Unable to connect to database.');
  }
};

export async function createUser(user) {
  await connectDB();
  return await User.create(user);
}

export async function updateUser(id, user) {
  await connectDB();
  return await User.findOneAndUpdate({ _id: id }, user, { new: true });
}

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

export async function deleteUser(id) {
  await connectDB();
  return await User.findOneAndDelete({ _id: id });
}

export async function createProject(project) {
  await connectDB();
  return await Project.create(project);
}

export async function updateProject(id, project) {
  await connectDB();
  return await Project.findOneAndUpdate({ _id: id }, project, { new: true });
}

export async function getProject(id) {
  await connectDB();
  return await Project.findById(id);
}

export async function getProjects() {
  await connectDB();
  return await Project.find();
}

export async function deleteProject(id) {
  await connectDB();
  return await Project.findOneAndDelete({ _id: id });
}

export async function createContact(contact) {
  await connectDB();
  return await Contact.create(contact);
}

export async function updateContact(id, contact) {
  await connectDB();
  return await Contact.findOneAndUpdate({ _id: id }, contact, { new: true });
}

export async function getContact(id) {
  await connectDB();
  return await Contact.findById(id);
}

export async function getContacts() {
  await connectDB();
  return await Contact.find();
}

export async function deleteContact(id) {
  await connectDB();
  return await Contact.findOneAndDelete({ _id: id });
}
