export type User = {
  name: string;
  email: string;
  password: string;
};

export type Project = {
  title: string;
  stack: string;
  description: string;
};

export type Contact = {
  fullName: string;
  email: string;
  message: string;
  date: Date;
};

export type UsersTableType = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

export type FormattedUsersTable = {
  _id: string;
  name: string;
  email: string;
  password: string;
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
