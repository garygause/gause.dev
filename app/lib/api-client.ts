import { User, Post, Project, Contact } from '@app/lib/definitions';

//const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://dev.gause.dev';

export async function getUser(id: string) {
  const res = await fetch(`${BASE_URL}/api/user/${id}/`, {
    method: 'GET',
    next: { tags: ['user'] },
  });
  return await res.json();
}

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/api/user/`, {
    method: 'GET',
    next: { tags: ['users'] },
  });
  return await res.json();
}

export async function saveUser(user: User, id?: string) {
  let url = `${BASE_URL}/api/user`;
  if (id) {
    url = url + '/' + id;
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return await res.json();
}

export async function deleteUser(id: string) {
  let url = `${BASE_URL}/api/user/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return await res.json();
}

// Projects

export async function incrementProjectShares(id: string) {
  const res = await fetch(`${BASE_URL}/api/project/${id}/shares`, {
    method: 'GET',
    next: { tags: ['project'] },
  });
  return await res.json();
}

export async function getProject(id: string) {
  const res = await fetch(`${BASE_URL}/api/project/${id}`, {
    method: 'GET',
    next: { tags: ['project'] },
  });
  return await res.json();
}

export async function getProjectBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/api/project/slug/${slug}`, {
    method: 'GET',
    next: { tags: ['project'] },
  });
  return await res.json();
}

export async function getProjects() {
  const res = await fetch(`${BASE_URL}/api/project/`, {
    method: 'GET',
    next: { tags: ['projects'] },
  });
  return await res.json();
}

export async function getPublishedProjects() {
  const res = await fetch(`${BASE_URL}/api/project?published=true`, {
    method: 'GET',
    next: { tags: ['projects'] },
  });
  return await res.json();
}

export async function getFeaturedProjects() {
  const res = await fetch(`${BASE_URL}/api/project?featured=true`, {
    method: 'GET',
    next: { tags: ['projects'] },
  });
  return await res.json();
}

export async function saveProject(project: Project, id?: string) {
  let url = `${BASE_URL}/api/project`;
  if (id) {
    url = url + '/' + id;
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(project),
  });
  return await res.json();
}

export async function deleteProject(id: string) {
  let url = `${BASE_URL}/api/project/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return await res.json();
}

// Posts

export async function incrementPostShares(id: string) {
  const res = await fetch(`${BASE_URL}/api/post/${id}/shares`, {
    method: 'GET',
    next: { tags: ['post'] },
  });
  return await res.json();
}

export async function getPost(id: string) {
  const res = await fetch(`${BASE_URL}/api/post/${id}`, {
    method: 'GET',
    next: { tags: ['post'] },
  });
  return await res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/api/post/slug/${slug}`, {
    method: 'GET',
    next: { tags: ['post'] },
  });
  return await res.json();
}

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/api/post/`, {
    method: 'GET',
    next: { tags: ['posts'] },
  });
  return await res.json();
}

export async function getPublishedPosts() {
  const res = await fetch(`${BASE_URL}/api/post?published=true`, {
    method: 'GET',
    next: { tags: ['posts'] },
  });
  return await res.json();
}

export async function getFeaturedPosts() {
  const res = await fetch(`${BASE_URL}/api/post?featured=true`, {
    method: 'GET',
    next: { tags: ['posts'] },
  });
  return await res.json();
}

export async function savePost(post: Post, id?: string) {
  let url = `${BASE_URL}/api/post`;
  if (id) {
    url = url + '/' + id;
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return await res.json();
}

export async function deletePost(id: string) {
  let url = `${BASE_URL}/api/post/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return await res.json();
}

// Contacts

export async function getContacts() {
  const res = await fetch(`${BASE_URL}/api/contact/`, {
    method: 'GET',
    next: { tags: ['contacts'] },
  });
  return await res.json();
}

export async function getContact(id: string) {
  const res = await fetch(`${BASE_URL}/api/contact/${id}/`, {
    method: 'GET',
    next: { tags: ['contact'] },
  });
  return await res.json();
}

export async function saveContact(contact: Contact, id?: string) {
  let url = `${BASE_URL}/api/contact`;
  if (id) {
    url = url + '/' + id;
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  return await res.json();
}

export async function deleteContact(id: string) {
  let url = `${BASE_URL}/api/contact/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return await res.json();
}
