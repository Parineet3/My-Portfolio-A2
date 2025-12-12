// // client/src/api/qual-api.js
// import auth from "../auth/auth-helper.js";
// const API = "http://localhost:3000/api";

// export async function createQualification(q) {
//   const token = auth.getToken && auth.getToken();
//   const res = await fetch(`${API}/qualifications`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//     body: JSON.stringify(q),
//   });
//   return res.json();
// }

// export async function fetchQualifications() {
//   const res = await fetch(`${API}/qualifications`);
//   return res.json();
// }

// export async function getQualification(id) {
//   const res = await fetch(`${API}/qualifications/${id}`);
//   return res.json();
// }

// export async function updateQualification(id, q) {
//   const token = auth.getToken && auth.getToken();
//   const res = await fetch(`${API}/qualifications/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//     body: JSON.stringify(q),
//   });
//   return res.json();
// }

// export async function deleteQualification(id) {
//   const token = auth.getToken && auth.getToken();
//   const res = await fetch(`${API}/qualifications/${id}`, {
//     method: "DELETE",
//     headers: { Authorization: token ? `Bearer ${token}` : "" },
//   });
//   return res.json();
// }


// src/api/education-api.js

const BASE_URL = "http://localhost:3000/api";

export const createEducation = async (data, token) => {
  const res = await fetch(`${BASE_URL}/education`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getEducation = async () => {
  const res = await fetch(`${BASE_URL}/education`);
  return await res.json();
};

export const updateEducation = async (id, data, token) => {
  const res = await fetch(`${BASE_URL}/education/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteEducation = async (id, token) => {
  const res = await fetch(`${BASE_URL}/education/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token
    },
  });
  return await res.json();
};
