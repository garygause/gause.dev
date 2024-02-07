export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Portfolio = {
  id: string;
  title: string;
  description: string;
  date: Date;
};

export type Contact = {
  id: string;
  fullName: string;
  email: string;
  message: string;
  date: Date;
};
