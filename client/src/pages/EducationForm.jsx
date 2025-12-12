import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EducationForm.css";

export default function EducationForm() {
  const [formData, setFormData] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tokenData = JSON.parse(localStorage.getItem("jwt"));
    const token = tokenData?.token;

    const res = await fetch("http://localhost:3000/api/education", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : ""
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.error) {
      setError(data.error);
    } else {
      alert("Education added successfully!");
      navigate("/app/education");
    }
  };

  return (
    <div className="eduform-container">
      <h2 className="eduform-title">Add Education</h2>

      {error && <p className="eduform-error">{error}</p>}

      <form className="eduform-form" onSubmit={handleSubmit}>
        
        <input type="text" name="title" placeholder="Degree or Course" onChange={handleChange} required />

        <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />

        <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />

        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

        <input type="date" name="completion" onChange={handleChange} required />

        <textarea name="description" placeholder="Description" rows="4" onChange={handleChange}></textarea>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
