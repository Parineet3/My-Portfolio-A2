import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectForm.css";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: "",
    image: ""
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // get token from localStorage (set during signin)
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    if (!jwt || !jwt.token) {
      setError("Please sign in before adding a project.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt.token,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        alert("Project added successfully!");
        navigate("/app/project");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="projectform-container">
      <h2 className="projectform-title">Add New Project</h2>

      {/* Error message */}
      {error && <p className="projectform-error">{error}</p>}

      <form className="projectform-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="completion"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          rows="4"
          placeholder="Project Description"
          onChange={handleChange}
          required
        ></textarea>

        <input 
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <button type="submit">Save Project</button>
      </form>
    </div>
  );
}
