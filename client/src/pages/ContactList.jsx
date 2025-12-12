import { useEffect, useState } from "react";
import "./ContactList.css";
import { getContacts, deleteContact } from "../api/contact-api.js";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const jwt = JSON.parse(localStorage.getItem("jwt"));
  const token = jwt?.token;

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  const handleDelete = async (id) => {
    await deleteContact(id, token);
    loadContacts();
  };

  const handleReply = async (contact) => {
    if (!replyText.trim()) return alert("Please enter a reply.");

    const res = await fetch("http://localhost:3000/api/contact/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        email: contact.email,
        message: replyText
      })
    });

    const data = await res.json();
    if (data.error) alert(data.error);
    else alert("Reply sent!");

    setReplyText("");
    setReplyingTo(null);
  };

  return (
    <div className="contactlist-container">
      <h2 className="contactlist-title">Messages Received</h2>

      {contacts.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Reply</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.firstname} {c.lastname}</td>
                <td>{c.email}</td>
                <td>{c.description}</td>

                {/* Reply button */}
                <td>
                  {replyingTo === c._id ? (
                    <div className="reply-box">
                      <textarea
                        placeholder="Type your reply..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <button onClick={() => handleReply(c)}>Send</button>
                    </div>
                  ) : (
                    <button onClick={() => setReplyingTo(c._id)}>Reply</button>
                  )}
                </td>

                {/* Delete Button */}
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(c._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
