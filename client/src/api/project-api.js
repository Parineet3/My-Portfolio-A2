// // client/src/api/project-api.js
// import auth from "../auth/auth-helper.js";
// const API = "http://localhost:3000/api";

// export async function createProject(project) {
//   const token = auth.getToken && auth.getToken();
//   const res = await fetch(`${API}/projects`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//     body: JSON.stringify(project),
//   });
//   return res.json();
// }

// export async function fetchProjects() {
//   const res = await fetch(`${API}/projects`);
//   return res.json();
// }

// export async function getProject(id) {
//   const res = await fetch(`${API}/projects/${id}`);
//   return res.json();
// }

// export async function updateProject(id, project) {
//   const token = auth.getToken && auth.getToken();
//   const res = await fetch(`${API}/projects/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//     body: JSON.stringify(project),
//   });
//   return res.json();
// }

// export async function deleteProject(id) {
//   const token = auth.getToken && auth.getToken();
//   const res = await fetch(`${API}/projects/${id}`, {
//     method: "DELETE",
//     headers: { Authorization: token ? `Bearer ${token}` : "" },
//   });
//   return res.json();
// }


// src/api/project-api.js

const BASE_URL = "http://localhost:3000/api";

export const createProject = async (data, token) => {
  const res = await fetch(`${BASE_URL}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getProjects = async () => {
  const res = await fetch(`${BASE_URL}/project`);
  return await res.json();
};

export const updateProject = async (id, data, token) => {
  const res = await fetch(`${BASE_URL}/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteProject = async (id, token) => {
  const res = await fetch(`${BASE_URL}/projects/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token
    },
  });
  return await res.json();
};
