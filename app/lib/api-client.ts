import { User, Project } from '@app/lib/definitions';

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

export async function saveUser(user: User) {
  const res = await fetch(`${BASE_URL}/api/user`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
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

export async function saveProject(project: Project) {
  const res = await fetch(`${BASE_URL}/api/project`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(project),
  });
  return await res.json();
}
