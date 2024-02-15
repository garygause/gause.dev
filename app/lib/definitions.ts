export type ApiResponse = {
  msg: string[];
  success: boolean;
  data: Object | null;
};

export type User = {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
};

export type Post = {
  _id?: string;
  title: string;
  author: string;
  keywords: string;
  summary: string;
  content: string;
  imageSrc: string;
  imageWidth: string;
  imageHeight: string;
  imageAlt: string;
  slug: string;
  featured: string;
  status: string;
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
  date?: Date;
};

export type Contact = {
  _id?: string;
  fullName: string;
  email: string;
  message: string;
};

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
};

export type ProjectsTableType = {
  _id: string;
  title: string;
  stack: string;
  description: string;
};

export type FormattedProjectsTable = {
  _id: string;
  title: string;
  stack: string;
  description: string;
};
