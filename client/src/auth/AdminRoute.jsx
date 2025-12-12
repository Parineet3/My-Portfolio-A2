// src/auth/AdminRoute.jsx
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const auth = JSON.parse(localStorage.getItem("jwt"));

  if (!auth) return <Navigate to="/signin" />;

  if (auth.user?.role !== "admin") {
    alert("Access denied! Admins only.");
    return <Navigate to="/app" />;
  }

  return children;
}
