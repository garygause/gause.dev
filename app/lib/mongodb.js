'use server';

import mongoose from 'mongoose';

import { Contact, LibraryImage, Post, Project, User } from '@/app/models';
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

// Contacts

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
  return await Contact.find().sort({ date: 'desc' });
}

export async function deleteContact(id) {
  await connectDB();
  return await Contact.findOneAndDelete({ _id: id });
}

// Library Images

export async function createLibraryImage(image) {
  await connectDB();
  return await LibraryImage.create(image);
}

export async function updateLibraryImage(id, image) {
  await connectDB();
  return await LibraryImage.findOneAndUpdate({ _id: id }, image, { new: true });
}

export async function getLibraryImage(id) {
  await connectDB();
  return await LibraryImage.findById(id);
}

export async function getLibraryImages() {
  await connectDB();
  return await LibraryImage.find().sort({ date: 'desc' });
}

export async function searchLibraryImages(filter) {
  await connectDB();
  return await PoLibraryImagest.find(filter).sort({ date: 'desc' });
}

export async function deleteLibraryImage(id) {
  await connectDB();
  return await LibraryImage.findOneAndDelete({ _id: id });
}

// Posts

export async function createPost(post) {
  await connectDB();
  return await Post.create(post);
}

export async function updatePost(id, post) {
  await connectDB();
  return await Post.findOneAndUpdate({ _id: id }, post, { new: true });
}

export async function incrementPostShares(id) {
  await connectDB();
  return await Post.findOneAndUpdate(
    { _id: id },
    { $inc: { shares: 1 } },
    { new: true }
  );
}

export async function getPost(id) {
  await connectDB();
  return await Post.findById(id);
}

export async function getPostBySlug(slug) {
  try {
    await connectDB();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log('Failed to get Post: ', error);
    throw new Error('Failed to get Post.');
  }
}

export async function getPosts() {
  await connectDB();
  return await Post.find().sort({ date: 'desc' });
}

export async function searchPosts(filter) {
  await connectDB();
  return await Post.find(filter).sort({ date: 'desc' });
}

export async function deletePost(id) {
  await connectDB();
  return await Post.findOneAndDelete({ _id: id });
}

// Projects

export async function createProject(project) {
  await connectDB();
  return await Project.create(project);
}

export async function updateProject(id, project) {
  await connectDB();
  return await Project.findOneAndUpdate({ _id: id }, project, { new: true });
}

export async function incrementProjectShares(id) {
  await connectDB();
  return await Project.findOneAndUpdate(
    { _id: id },
    { $inc: { shares: 1 } },
    { new: true }
  );
}

export async function getProject(id) {
  await connectDB();
  return await Project.findById(id);
}

export async function getProjectBySlug(slug) {
  try {
    await connectDB();
    const post = await Project.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log('Failed to get Project: ', error);
    throw new Error('Failed to get Project.');
  }
}

export async function getProjects() {
  await connectDB();
  return await Project.find().sort({ date: 'desc' });
}

export async function searchProjects(filter) {
  await connectDB();
  return await Project.find(filter).sort({ date: 'desc' });
}

export async function deleteProject(id) {
  await connectDB();
  return await Project.findOneAndDelete({ _id: id });
}

// Users

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
