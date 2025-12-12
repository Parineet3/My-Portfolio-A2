// src/auth/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = JSON.parse(localStorage.getItem("jwt"));
  return auth ? children : <Navigate to="/signin" />;
}
