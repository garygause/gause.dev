export type ApiResponse = {
  msg: string[];
  success: boolean;
  data: Object | null;
};

export type Contact = {
  _id?: string;
  fullName: string;
  email: string;
  message: string;
};

export type LibraryImage = {
  _id?: string;
  title: string;
  credit?: string;
  keywords?: string;
  alt?: string;
  path?: string;
  width?: string;
  height?: string;
  size?: string;
  status: string;
  date?: Date;
};

export type Post = {
  _id?: string;
  title: string;
  author: string;
  keywords: string;
  summary: string;
  content: string;
  libraryImage: string;
  libraryImageData?: LibraryImage;
  slug: string;
  featured: string;
  status: string;
  shares?: number;
  date?: Date;
};

export type Project = {
  _id?: string;
  title: string;
  stack: string;
  summary: string;
  description: string;
  keywords: string;
  imageSrc: string;
  imageWidth: string;
  imageHeight: string;
  imageAlt: string;
  slug: string;
  featured: string;
  status: string;
  shares?: number;
  date?: Date;
};

export type User = {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
};

// Tables

export type ContactsTableType = {
  _id: string;
  fullName: string;
  email: string;
  message: string;
};

export type FormattedContactsTable = {
  _id: string;
  fullName: string;
  email: string;
  message: string;
};

export type FormattedLibraryImagesTable = {
  _id: string;
  title: string;
  alt: string;
  path: string;
  size: string;
  status: string;
};

export type UsersTableType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export type FormattedUsersTable = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export type FormattedPostsTable = {
  _id: string;
  title: string;
  author: string;
  keywords: string;
  content: string;
  image: string;
  imageAlt: string;
  slug: string;
  featured: string;
  status: string;
  shares: number;
};

export type ProjectsTableType = {
  _id: string;
  title: string;
  stack: string;
  description: string;
  slug: string;
  shares: number;
};

export type FormattedProjectsTable = {
  _id: string;
  title: string;
  stack: string;
  description: string;
  slug: string;
  shares: number;
};
