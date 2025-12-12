import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Education.css";

export default function Education() {
  const [list, setList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchEducation();
    checkAdmin();
  }, []);

  const checkAdmin = () => {
    const data = JSON.parse(localStorage.getItem("jwt"));
    if (data?.user?.email === "parineet29@gmail.com") {
      setIsAdmin(true);
    }
  };

  const fetchEducation = async () => {
    const res = await fetch("http://localhost:3000/api/education");
    const data = await res.json();
    setList(data);
  };

  const handleDelete = async (id) => {
    const token = JSON.parse(localStorage.getItem("jwt"))?.token;

    await fetch(`http://localhost:3000/api/education/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchEducation();
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setEditData(item);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    const token = JSON.parse(localStorage.getItem("jwt"))?.token;

    await fetch(`http://localhost:3000/api/education/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editData),
    });

    setEditingId(null);
    fetchEducation();
  };

  return (
    <div className="education-container">
      <h1 className="education-title">Education Qualifications</h1>

      {isAdmin && <Link to="/app/education/add" className="edu-add-btn">+ Add</Link>}

      {list.length === 0 ? (
        <p>No records found</p>
      ) : (
        list.map((item) => (
          <div key={item._id} className="education-item">
            
            {editingId === item._id ? (
  <div className="edu-edit-form">
    <input
      name="title"
      value={editData.title}
      onChange={handleEditChange}
    />

    <input
      name="firstname"
      value={editData.firstname}
      onChange={handleEditChange}
    />

    <input
      name="lastname"
      value={editData.lastname}
      onChange={handleEditChange}
    />

    <input
      name="email"
      value={editData.email}
      onChange={handleEditChange}
    />

    <input
      type="date"
      name="completion"
      value={editData.completion?.substring(0, 10)}
      onChange={handleEditChange}
    />

    <textarea
      name="description"
      rows="4"
      value={editData.description}
      onChange={handleEditChange}
    ></textarea>

    <div className="edu-edit-buttons">
      <button className="save-btn" onClick={saveEdit}>Save</button>
      <button className="cancel-btn" onClick={() => setEditingId(null)}>Cancel</button>
    </div>
  </div>
) : (

              <>
                <div className="education-degree">{item.title}</div>
                <div className="education-school">{item.firstname} {item.lastname}</div>
                <div className="education-year">Completed: {item.completion?.substring(0, 10)}</div>
                <p>{item.description}</p>

                {isAdmin && (
                  <>
                    <button className="edu-edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="edu-delete-btn" onClick={() => handleDelete(item._id)}>Delete</button>
                  </>
                )}
              </>
            )}

          </div>
        ))
      )}
    </div>
  );
}
