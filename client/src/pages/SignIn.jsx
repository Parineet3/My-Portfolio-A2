import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../auth/auth-helper";   // 👈 IMPORT
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.error) {
      setError(data.error);
    } else {
      // 👇 Save JWT correctly!
      auth.authenticate(data, () => {
        navigate("/app/education"); // redirect inside app
      });
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Welcome Back</h2>

      <form className="signin-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        {error && <p className="signin-error">{error}</p>}

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
