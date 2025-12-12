import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchProjects();
    checkAdmin();
  }, []);

  const checkAdmin = () => {
    const data = JSON.parse(localStorage.getItem("jwt"));
    if (data?.user?.email === "parineet29@gmail.com") {
      setIsAdmin(true);
    }
  };

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:3000/api/project");
    const data = await res.json();
    setProjects(data);
  };

  const handleDelete = async (id) => {
    const token = JSON.parse(localStorage.getItem("jwt"))?.token;

    await fetch(`http://localhost:3000/api/project/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchProjects();
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

    await fetch(`http://localhost:3000/api/project/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editData),
    });

    setEditingId(null);
    fetchProjects();
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      {isAdmin && <Link className="add-project-btn" to="/app/project/add">+ Add Project</Link>}

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p._id}>
            
            {editingId === p._id ? (
              <div className="edit-form">
                <input name="title" value={editData.title} onChange={handleEditChange} />
                <input name="firstname" value={editData.firstname} onChange={handleEditChange} />
                <input name="lastname" value={editData.lastname} onChange={handleEditChange} />
                <input name="email" value={editData.email} onChange={handleEditChange} />
                <input
                  type="date"
                  name="completion"
                  value={editData.completion?.substring(0, 10)}
                  onChange={handleEditChange}
                />
                <textarea 
                  name="description" 
                  value={editData.description} 
                  onChange={handleEditChange}
                  rows="4"
                />
                <input 
                  name="image" 
                  value={editData.image} 
                  onChange={handleEditChange} 
                  placeholder="Image URL"
                />

                <div className="edit-buttons">
                  <button className="save-btn" onClick={saveEdit}>Save</button>
                  <button className="cancel-btn" onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              </div>
            ) : (


              <>
                {p.image && <img src={p.image} alt={p.title} className="project-card img" />}
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p><strong>Completed:</strong> {p.completion?.substring(0, 10)}</p>

                {isAdmin && (
                  <>
                    <button className="project-edit-btn" onClick={() => handleEdit(p)}>Edit</button>
                    <button className="project-delete-btn" onClick={() => handleDelete(p._id)}>Delete</button>
                  </>
                )}
              </>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
