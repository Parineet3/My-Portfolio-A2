const BASE_URL = "http://localhost:3000/api";

// Get all messages
export const getContacts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`); // <-- FIXED
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

// Create a message
export const createContact = async (contactData) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`, { // <-- FIXED
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

// Delete a message
export const deleteContact = async (id, token) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts/${id}`, { // <-- FIXED
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
