import { ApiResponse, User, Project, Contact } from '@app/lib/definitions';

const BASE_URL = 'http://localhost:3000';

export async function getUser(id: string) {
  const res = await fetch(`${BASE_URL}/api/user/${id}/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await res.json();
}

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/api/user/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
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
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await res.json();
}

export async function getProject(id: string) {
  const res = await fetch(`${BASE_URL}/api/project/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await res.json();
}

export async function getProjects() {
  const res = await fetch(`${BASE_URL}/api/project/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
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
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await res.json();
}

export async function getContacts() {
  const res = await fetch(`${BASE_URL}/api/contact/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await res.json();
}

export async function getContact(id: string) {
  const res = await fetch(`${BASE_URL}/api/contact/${id}/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await res.json();
}

export async function saveContact(contact: Contact, id?: string) {
  let url = `${BASE_URL}/api/contact`;
  if (id) {
    url = url + '/' + id;
  }
  console.log('api-client:');
  console.log(contact);
  console.log(id);
  console.log(url);
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
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await res.json();
}
